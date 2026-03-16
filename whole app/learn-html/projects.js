// Projects Data - Final Projects Page
const projectsData = [
    {
        id: 1,
        title: "Personal Introduction Page",
        description: "Create a simple one-page introduction about yourself with headings, paragraphs, and an image.",
        difficulty: "easy",
        skills: ["Headings", "Paragraphs", "Images", "Basic structure"],
        template: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>About Me</title>
</head>
<body>
  <h1>Your Name</h1>
  <img src="photo.jpg" alt="Your photo">
  <h2>About Me</h2>
  <p>Write about yourself...</p>
  <h2>Hobbies</h2>
  <ul>
    <li>Hobby 1</li>
    <li>Hobby 2</li>
  </ul>
</body>
</html>`
    },
    {
        id: 2,
        title: "Recipe Page",
        description: "Build a recipe page with ingredients list, step-by-step instructions, and cooking times.",
        difficulty: "easy",
        skills: ["Lists", "Headings", "Paragraphs", "Formatting"],
        template: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Recipe: Dish Name</title>
</head>
<body>
  <h1>Dish Name</h1>
  <p><strong>Prep Time:</strong> 15 min | <strong>Cook Time:</strong> 30 min</p>
  <h2>Ingredients</h2>
  <ul>
    <li>Ingredient 1</li>
    <li>Ingredient 2</li>
  </ul>
  <h2>Instructions</h2>
  <ol>
    <li>Step 1</li>
    <li>Step 2</li>
  </ol>
</body>
</html>`
    },
    {
        id: 3,
        title: "Contact Form",
        description: "Create a contact form with name, email, subject, and message fields with validation.",
        difficulty: "easy",
        skills: ["Forms", "Input types", "Labels", "Validation"],
        template: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Contact Us</title>
</head>
<body>
  <h1>Contact Us</h1>
  <form action="/submit" method="POST">
    <label for="name">Name:</label>
    <input type="text" id="name" required>
    <label for="email">Email:</label>
    <input type="email" id="email" required>
    <label for="message">Message:</label>
    <textarea id="message" rows="5" required></textarea>
    <button type="submit">Send</button>
  </form>
</body>
</html>`
    },
    {
        id: 4,
        title: "Product Comparison Table",
        description: "Build a comparison table for 3 products with features, prices, and ratings.",
        difficulty: "medium",
        skills: ["Tables", "thead/tbody", "Formatting", "Structure"],
        template: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Product Comparison</title>
</head>
<body>
  <h1>Compare Products</h1>
  <table border="1">
    <caption>Smartphone Comparison</caption>
    <thead>
      <tr>
        <th>Feature</th>
        <th>Phone A</th>
        <th>Phone B</th>
        <th>Phone C</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Price</td>
        <td>$699</td>
        <td>$799</td>
        <td>$599</td>
      </tr>
      <tr>
        <td>Storage</td>
        <td>128GB</td>
        <td>256GB</td>
        <td>64GB</td>
      </tr>
    </tbody>
  </table>
</body>
</html>`
    },
    {
        id: 5,
        title: "Media Gallery",
        description: "Create a gallery page with images, videos, and audio players.",
        difficulty: "medium",
        skills: ["Images", "Video", "Audio", "Semantic HTML"],
        template: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Media Gallery</title>
</head>
<body>
  <header>
    <h1>My Media Gallery</h1>
  </header>
  <main>
    <section>
      <h2>Photos</h2>
      <img src="photo1.jpg" alt="Description 1">
      <img src="photo2.jpg" alt="Description 2">
    </section>
    <section>
      <h2>Videos</h2>
      <video width="400" controls>
        <source src="video.mp4" type="video/mp4">
      </video>
    </section>
    <section>
      <h2>Music</h2>
      <audio controls>
        <source src="audio.mp3" type="audio/mpeg">
      </audio>
    </section>
  </main>
</body>
</html>`
    },
    {
        id: 6,
        title: "Blog Article Layout",
        description: "Build a complete blog article with header, navigation, main content, sidebar, and footer.",
        difficulty: "medium",
        skills: ["Semantic HTML", "Article", "Aside", "Navigation"],
        template: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="description" content="Blog article about topic">
  <title>Blog Post Title</title>
</head>
<body>
  <header>
    <nav>
      <a href="/">Home</a>
      <a href="/blog">Blog</a>
      <a href="/about">About</a>
    </nav>
  </header>
  <main>
    <article>
      <h1>Article Title</h1>
      <p>Published: <time datetime="2024-01-15">January 15, 2024</time></p>
      <p>Article content...</p>
    </article>
    <aside>
      <h3>Related Posts</h3>
      <ul>
        <li><a href="#">Post 1</a></li>
        <li><a href="#">Post 2</a></li>
      </ul>
    </aside>
  </main>
  <footer>
    <p>&copy; 2024 My Blog</p>
  </footer>
</body>
</html>`
    },
    {
        id: 7,
        title: "Event Registration Form",
        description: "Create a detailed event registration form with multiple input types and fieldsets.",
        difficulty: "medium",
        skills: ["Forms", "Fieldset", "Select", "Accessibility"],
        template: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Event Registration</title>
</head>
<body>
  <h1>Register for Tech Conference 2024</h1>
  <form>
    <fieldset>
      <legend>Personal Information</legend>
      <label for="fname">First Name:</label>
      <input type="text" id="fname" required>
      <label for="lname">Last Name:</label>
      <input type="text" id="lname" required>
      <label for="email">Email:</label>
      <input type="email" id="email" required>
    </fieldset>
    <fieldset>
      <legend>Event Options</legend>
      <label for="ticket">Ticket Type:</label>
      <select id="ticket">
        <option value="standard">Standard - $99</option>
        <option value="vip">VIP - $199</option>
      </select>
      <label>Sessions:</label>
      <input type="checkbox" id="s1"><label for="s1">Workshop A</label>
      <input type="checkbox" id="s2"><label for="s2">Workshop B</label>
    </fieldset>
    <button type="submit">Register</button>
  </form>
</body>
</html>`
    },
    {
        id: 8,
        title: "Portfolio Landing Page",
        description: "Build a professional portfolio landing page with sections for skills, projects, and contact.",
        difficulty: "hard",
        skills: ["Semantic HTML", "Forms", "Links", "Structure"],
        template: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="description" content="Professional portfolio of Your Name">
  <title>Your Name - Portfolio</title>
</head>
<body>
  <header>
    <nav aria-label="Main navigation">
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>
  <main>
    <section id="about">
      <h1>Your Name</h1>
      <p>Web Developer | Designer</p>
    </section>
    <section id="skills">
      <h2>Skills</h2>
      <ul>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
      </ul>
    </section>
    <section id="projects">
      <h2>Projects</h2>
      <article>
        <h3>Project 1</h3>
        <p>Description...</p>
      </article>
    </section>
    <section id="contact">
      <h2>Contact</h2>
      <form>
        <input type="email" placeholder="Your email" required>
        <textarea placeholder="Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  </main>
  <footer>
    <p>&copy; 2024 Your Name</p>
  </footer>
</body>
</html>`
    },
    {
        id: 9,
        title: "FAQ Accordion Page",
        description: "Create an FAQ page using details/summary elements for expandable sections.",
        difficulty: "hard",
        skills: ["Details/Summary", "Semantic HTML", "Accessibility"],
        template: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>FAQ</title>
</head>
<body>
  <header>
    <h1>Frequently Asked Questions</h1>
  </header>
  <main>
    <section>
      <h2>General Questions</h2>
      <details>
        <summary>What is your return policy?</summary>
        <p>You can return items within 30 days...</p>
      </details>
      <details>
        <summary>How do I track my order?</summary>
        <p>Log into your account and visit order history...</p>
      </details>
    </section>
    <section>
      <h2>Technical Support</h2>
      <details>
        <summary>How do I reset my password?</summary>
        <p>Click on "Forgot Password" on the login page...</p>
      </details>
    </section>
  </main>
</body>
</html>`
    },
    {
        id: 10,
        title: "Complete Business Website",
        description: "Build a multi-section business website with all HTML features: navigation, hero, services, team, testimonials, contact, and footer.",
        difficulty: "hard",
        skills: ["All HTML concepts", "Semantic structure", "Accessibility", "SEO"],
        template: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="description" content="Professional business services">
  <title>Company Name - Professional Services</title>
</head>
<body>
  <header>
    <div>
      <img src="logo.png" alt="Company Logo">
      <nav aria-label="Primary">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#team">Team</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  </header>
  <main>
    <section id="hero">
      <h1>Welcome to Company Name</h1>
      <p>We provide excellence in everything we do.</p>
      <a href="#contact">Get Started</a>
    </section>
    <section id="services">
      <h2>Our Services</h2>
      <article>
        <h3>Service 1</h3>
        <p>Description of service...</p>
      </article>
      <article>
        <h3>Service 2</h3>
        <p>Description of service...</p>
      </article>
    </section>
    <section id="team">
      <h2>Our Team</h2>
      <article>
        <img src="team1.jpg" alt="Team member name">
        <h3>Name</h3>
        <p>Position</p>
      </article>
    </section>
    <section id="contact">
      <h2>Contact Us</h2>
      <form>
        <fieldset>
          <legend>Send us a message</legend>
          <label for="name">Name:</label>
          <input type="text" id="name" required>
          <label for="email">Email:</label>
          <input type="email" id="email" required>
          <label for="message">Message:</label>
          <textarea id="message" required></textarea>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </section>
  </main>
  <footer>
    <nav aria-label="Footer">
      <a href="#">Privacy</a>
      <a href="#">Terms</a>
    </nav>
    <p>&copy; 2024 Company Name. All rights reserved.</p>
  </footer>
</body>
</html>`
    }
];

window.projectsData = projectsData;
