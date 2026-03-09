/**
 * C++ Educational App - Code Runner
 * JavaScript-based C++ code simulator
 */

const CodeRunner = {
    // Simulated variables storage
    variables: {},
    output: [],
    inputQueue: [],
    inputIndex: 0,

    /**
     * Reset the runner state
     */
    reset() {
        this.variables = {};
        this.output = [];
        this.inputQueue = [];
        this.inputIndex = 0;
    },

    /**
     * Simulate running C++ code
     * @param {string} code - C++ code to run
     * @param {string[]} inputs - Array of input values
     * @returns {object} - Result with output and errors
     */
    run(code, inputs = []) {
        this.reset();
        this.inputQueue = inputs;

        try {
            // Remove comments
            code = this.removeComments(code);

            // Check for basic syntax
            const syntaxError = this.checkSyntax(code);
            if (syntaxError) {
                return { success: false, output: '', error: syntaxError };
            }

            // Extract and process main function
            const mainMatch = code.match(/int\s+main\s*\(\s*\)\s*\{([\s\S]*)\}/);
            if (!mainMatch) {
                return { success: false, output: '', error: 'Error: main() function not found' };
            }

            const mainBody = mainMatch[1];
            this.executeStatements(mainBody);

            return { success: true, output: this.output.join('\n'), error: null };
        } catch (e) {
            return { success: false, output: this.output.join('\n'), error: 'Runtime Error: ' + e.message };
        }
    },

    /**
     * Remove C++ comments
     */
    removeComments(code) {
        // Remove single-line comments
        code = code.replace(/\/\/.*$/gm, '');
        // Remove multi-line comments
        code = code.replace(/\/\*[\s\S]*?\*\//g, '');
        return code;
    },

    /**
     * Basic syntax checking
     */
    checkSyntax(code) {
        // Check for #include
        if (!code.includes('#include')) {
            return 'Error: Missing #include directive';
        }

        // Check for main function
        if (!code.includes('main')) {
            return 'Error: main() function is required';
        }

        // Check for balanced braces
        const openBraces = (code.match(/\{/g) || []).length;
        const closeBraces = (code.match(/\}/g) || []).length;
        if (openBraces !== closeBraces) {
            return 'Error: Unbalanced braces { }';
        }

        return null;
    },

    /**
     * Execute statements in the code
     */
    executeStatements(code) {
        const lines = code.split(';').map(l => l.trim()).filter(l => l);

        for (const line of lines) {
            if (line.startsWith('return')) continue;
            if (line.includes('cout')) {
                this.handleCout(line);
            } else if (line.includes('cin')) {
                this.handleCin(line);
            } else if (this.isVariableDeclaration(line)) {
                this.handleDeclaration(line);
            } else if (line.includes('=')) {
                this.handleAssignment(line);
            }
        }
    },

    /**
     * Check if line is variable declaration
     */
    isVariableDeclaration(line) {
        const types = ['int', 'double', 'float', 'char', 'string', 'bool'];
        return types.some(t => line.trim().startsWith(t + ' '));
    },

    /**
     * Handle variable declaration
     */
    handleDeclaration(line) {
        const types = ['int', 'double', 'float', 'char', 'string', 'bool'];
        let type = types.find(t => line.startsWith(t + ' '));
        if (!type) return;

        let rest = line.substring(type.length).trim();

        // Handle multiple declarations
        const parts = rest.split(',');
        for (const part of parts) {
            const match = part.trim().match(/^(\w+)\s*(?:=\s*(.+))?$/);
            if (match) {
                const name = match[1];
                const value = match[2] ? this.evaluateExpression(match[2].trim(), type) : this.getDefaultValue(type);
                this.variables[name] = { type, value };
            }
        }
    },

    /**
     * Get default value for type
     */
    getDefaultValue(type) {
        switch (type) {
            case 'int': return 0;
            case 'double':
            case 'float': return 0.0;
            case 'char': return '';
            case 'string': return '';
            case 'bool': return false;
            default: return null;
        }
    },

    /**
     * Handle assignment
     */
    handleAssignment(line) {
        const match = line.match(/^(\w+)\s*=\s*(.+)$/);
        if (match && this.variables[match[1]]) {
            const name = match[1];
            const type = this.variables[name].type;
            this.variables[name].value = this.evaluateExpression(match[2].trim(), type);
        }
    },

    /**
     * Handle cout statement
     */
    handleCout(line) {
        // Extract everything after cout <<
        const match = line.match(/cout\s*<<\s*(.+)/);
        if (!match) return;

        let parts = match[1].split('<<').map(p => p.trim());
        let outputLine = '';
        let addNewline = false;

        for (const part of parts) {
            if (part === 'endl' || part === '"\\n"') {
                addNewline = true;
            } else if (part.startsWith('"') && part.endsWith('"')) {
                outputLine += part.slice(1, -1);
            } else if (this.variables[part]) {
                outputLine += this.variables[part].value;
            } else if (part.match(/^[\d\+\-\*\/\(\)\s\.]+$/)) {
                outputLine += this.evaluateExpression(part, 'double');
            } else {
                // Try to evaluate as expression with variables
                outputLine += this.evaluateExpression(part, 'double');
            }
        }

        if (addNewline || outputLine) {
            this.output.push(outputLine);
        }
    },

    /**
     * Handle cin statement
     */
    handleCin(line) {
        const match = line.match(/cin\s*>>\s*(\w+)/);
        if (match && this.variables[match[1]]) {
            const name = match[1];
            const type = this.variables[name].type;
            const input = this.inputQueue[this.inputIndex++] || '';
            this.variables[name].value = this.evaluateExpression(input, type);
        }
    },

    /**
     * Evaluate expression
     */
    evaluateExpression(expr, type) {
        expr = expr.trim();

        // String literal
        if (expr.startsWith('"') && expr.endsWith('"')) {
            return expr.slice(1, -1);
        }

        // Char literal
        if (expr.startsWith("'") && expr.endsWith("'")) {
            return expr.charAt(1);
        }

        // Boolean
        if (expr === 'true') return true;
        if (expr === 'false') return false;

        // Replace variables with their values
        let evalExpr = expr;
        for (const [name, data] of Object.entries(this.variables)) {
            const regex = new RegExp(`\\b${name}\\b`, 'g');
            evalExpr = evalExpr.replace(regex, typeof data.value === 'string' ? `"${data.value}"` : data.value);
        }

        // Try to evaluate numeric expression
        try {
            const result = Function('"use strict"; return (' + evalExpr + ')')();
            if (type === 'int') return Math.floor(result);
            return result;
        } catch {
            return evalExpr;
        }
    }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CodeRunner;
}
