/**
 * Database Educational App - C++ Code Runner (Simulation)
 * Simulates C++ code execution in the browser
 */

const CodeRunner = {
    /**
     * Simulate running C++ code
     * Extracts cout statements and simulates output
     */
    run(code) {
        try {
            let output = [];
            const lines = code.split('\n');
            const variables = {};

            for (let line of lines) {
                line = line.trim();

                // Skip comments, preprocessor, using namespace
                if (line.startsWith('//') || line.startsWith('#') || line.startsWith('using') ||
                    line === '' || line === '{' || line === '}' || line.startsWith('return')) {
                    continue;
                }

                // Variable declarations
                const varMatch = line.match(/^(int|double|float|string|char|bool|long|long long|auto)\s+(\w+)\s*=\s*(.+);$/);
                if (varMatch) {
                    const [, type, name, value] = varMatch;
                    variables[name] = this.evaluateValue(value.trim(), type, variables);
                    continue;
                }

                // Variable assignment
                const assignMatch = line.match(/^(\w+)\s*=\s*(.+);$/);
                if (assignMatch && variables.hasOwnProperty(assignMatch[1])) {
                    variables[assignMatch[1]] = this.evaluateValue(assignMatch[2].trim(), 'auto', variables);
                    continue;
                }

                // cout statements
                if (line.includes('cout')) {
                    const result = this.parseCout(line, variables);
                    if (result !== null) output.push(result);
                }
            }

            return {
                success: true,
                output: output.join('') || '(Program executed successfully, no output)',
                variables: variables
            };
        } catch (e) {
            return {
                success: false,
                output: `Compilation Error: ${e.message}`,
                variables: {}
            };
        }
    },

    evaluateValue(val, type, vars) {
        // Remove trailing semicolons
        val = val.replace(/;$/, '').trim();

        // String literal
        if (val.startsWith('"') && val.endsWith('"')) {
            return val.slice(1, -1);
        }
        // Char literal
        if (val.startsWith("'") && val.endsWith("'")) {
            return val.slice(1, -1);
        }
        // Boolean
        if (val === 'true') return true;
        if (val === 'false') return false;
        // Variable reference
        if (vars.hasOwnProperty(val)) return vars[val];
        // Number
        if (!isNaN(val)) return Number(val);
        // Simple expression
        try {
            const expr = val.replace(/\b(\w+)\b/g, (match) => {
                if (vars.hasOwnProperty(match)) return vars[match];
                return match;
            });
            return eval(expr);
        } catch {
            return val;
        }
    },

    parseCout(line, vars) {
        let result = '';
        // Extract everything after cout <<
        const coutMatch = line.match(/cout\s*<<\s*(.+)/);
        if (!coutMatch) return null;

        let rest = coutMatch[1].replace(/;$/, '');
        const parts = rest.split('<<').map(p => p.trim());

        for (let part of parts) {
            if (part === 'endl' || part === '"\\n"' || part === "'\\n'") {
                result += '\n';
            } else if (part.startsWith('"') && part.endsWith('"')) {
                result += part.slice(1, -1);
            } else if (part.startsWith("'") && part.endsWith("'")) {
                result += part.slice(1, -1);
            } else if (vars.hasOwnProperty(part)) {
                result += String(vars[part]);
            } else if (part.includes('sizeof')) {
                const typeMatch = part.match(/sizeof\((\w+)\)/);
                if (typeMatch) {
                    const sizes = { 'int': 4, 'double': 8, 'float': 4, 'char': 1, 'bool': 1, 'long': 8, 'string': 32 };
                    result += String(sizes[typeMatch[1]] || 4);
                }
            } else if (!isNaN(part)) {
                result += part;
            } else {
                // Try to evaluate as expression
                try {
                    const expr = part.replace(/\b(\w+)\b/g, (match) => {
                        if (vars.hasOwnProperty(match)) return vars[match];
                        return match;
                    });
                    result += String(eval(expr));
                } catch {
                    result += part;
                }
            }
        }
        return result;
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = CodeRunner;
}
