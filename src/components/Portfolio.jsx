import React, { useState, useEffect } from 'react';

const Portfolio = () => {
  const [activePage, setActivePage] = useState('home');
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [blogPosts, setBlogPosts] = useState(JSON.parse(localStorage.getItem('blogPosts')) || [
    {
        id: 1,
        title: "Getting Started with React Hooks",
        category: "Tutorial",
        excerpt: "Learn how to use React Hooks to simplify your component logic and write cleaner code.",
        content: `<h2>What are React Hooks?</h2>
<p>React Hooks are functions that let you use state and other React features in functional components. They were introduced in React 16.8 and have since become a fundamental part of modern React development.</p>
<h3>Why Use Hooks?</h3>
<ul>
<li>No need for class components</li>
<li>Better code organization</li>
<li>Easier to share stateful logic</li>
<li>Improved performance</li>
</ul>
<blockquote>Hooks let you use more of React's features without classes.</blockquote>
<h3>Common Hooks</h3>
<p>The most commonly used hooks are:</p>
<ul>
<li><code>useState</code> - for managing component state</li>
<li><code>useEffect</code> - for side effects</li>
<li><code>useContext</code> - for consuming context</li>
<li><code>useReducer</code> - for complex state logic</li>
</ul>
<p>Start with these hooks and gradually explore others as you become more comfortable with the concept.</p>`,
        image: "https://picsum.photos/seed/react-hooks/800/400.jpg",
        date: "2024-01-15",
        readTime: 5
    },
    {
        id: 2,
        title: "The Future of Web Development",
        category: "Technology",
        excerpt: "Exploring emerging trends and technologies that will shape the future of web development.",
        content: `<h2>Introduction</h2>
<p>Web development is constantly evolving, with new technologies and paradigms emerging regularly. Let's explore what the future holds.</p>
<h3>Key Trends</h3>
<ol>
<li><strong>AI Integration</strong> - AI-powered development tools</li>
<li><strong>WebAssembly</strong> - Near-native performance in the browser</li>
<li><strong>JAMstack</strong> - JavaScript, APIs, and Markup architecture</li>
<li><strong>Progressive Web Apps</strong> - App-like experiences on the web</li>
</ol>
<p>These trends are not just buzzwords; they represent real shifts in how we build and deploy web applications.</p>`,
        image: "https://picsum.photos/seed/future-web/800/400.jpg",
        date: "2024-01-10",
        readTime: 7
    },
    {
        id: 3,
        title: "Building a Scalable Startup Tech Stack",
        category: "Business",
        excerpt: "A guide to choosing the right technologies for your startup's growth journey.",
        content: `<h2>Choosing Your Tech Stack</h2>
<p>When building a startup, your technology choices can make or break your success. Here's how to choose wisely.</p>
<h3>Considerations</h3>
<ul>
<li>Team expertise</li>
<li>Scalability requirements</li>
<li>Time to market</li>
<li>Cost considerations</li>
</ul>
<p>Remember: The best tech stack is one that your team can effectively use to deliver value to customers quickly.</p>`,
        image: "https://picsum.photos/seed/startup-tech/800/400.jpg",
        date: "2024-01-05",
        readTime: 6
    }
  ]);
  const [currentFilter, setCurrentFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPost, setCurrentPost] = useState(null);
  const [newPost, setNewPost] = useState({
    title: '',
    category: '',
    excerpt: '',
    image: '',
    content: ''
  });

  const handleNewPostChange = (e) => {
    const { name, value } = e.target;
    setNewPost(prev => ({ ...prev, [name]: value }));
  };

  const handleContentChange = (e) => {
    setNewPost(prev => ({ ...prev, content: e.target.innerHTML }));
  };

  const handleNewPostSubmit = (e) => {
    e.preventDefault();
    const post = {
      ...newPost,
      id: Date.now(),
      date: new Date().toISOString().split('T')[0],
      readTime: Math.ceil(newPost.content.split(' ').length / 200)
    };
    const updatedPosts = [post, ...blogPosts];
    setBlogPosts(updatedPosts);
    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
    showPage('blog');
    setNewPost({
      title: '',
      category: '',
      excerpt: '',
      image: '',
      content: ''
    });
  };

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const showPage = (pageId) => {
    setActivePage(pageId);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const handleFilterClick = (category) => {
    setCurrentFilter(category);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const viewPost = (postId) => {
    const post = blogPosts.find(p => p.id === postId);
    setCurrentPost(post);
    showPage('blogPost');
  };

  const filteredPosts = blogPosts
    .filter(post => currentFilter === 'all' || post.category === currentFilter)
    .filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }

  return (
    <div>
      {/* Navigation */}
      <nav id="navbar">
        <div className="nav-container">
          <a href="#" className="logo" onClick={() => showPage('home')}>
            AC
          </a>
          <div className="nav-links" id="navLinks">
            <a href="#" onClick={() => showPage('home')} className={`nav-link ${activePage === 'home' ? 'active' : ''}`}>
              Home
            </a>
            <a href="#" onClick={() => showPage('about')} className={`nav-link ${activePage === 'about' ? 'active' : ''}`}>
              About
            </a>
            <a href="#" onClick={() => showPage('skills')} className={`nav-link ${activePage === 'skills' ? 'active' : ''}`}>
              Skills
            </a>
            <a href="#" onClick={() => showPage('projects')} className={`nav-link ${activePage === 'projects' ? 'active' : ''}`}>
              Projects
            </a>
            <a href="#" onClick={() => showPage('blog')} className={`nav-link ${activePage === 'blog' ? 'active' : ''}`}>
              Blog
            </a>
            <a href="#" onClick={() => showPage('experience')} className={`nav-link ${activePage === 'experience' ? 'active' : ''}`}>
              Experience
            </a>
            <a href="#" onClick={() => showPage('contact')} className={`nav-link ${activePage === 'contact' ? 'active' : ''}`}>
              Contact
            </a>
            <button className="theme-toggle" id="themeToggle" onClick={toggleTheme}>
              <i className={`fas ${theme === 'light' ? 'fa-moon' : 'fa-sun'}`}></i>
            </button>
          </div>
          <button className="mobile-menu-toggle" id="mobileMenuToggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </nav>

      {/* Home Page */}
      <div id="home" className={`page ${activePage === 'home' ? 'active' : ''}`}>
        <section className="hero">
            <div className="hero-content">
                <div className="hero-text">
                    <h1>Hi, I'm <span className="gradient-text">Alex Chen</span></h1>
                    <p className="subtitle">Full-Stack Developer & Entrepreneur</p>
                    <p>Building innovative solutions at the intersection of technology and business. Passionate about creating products that make a difference.</p>
                    <div className="hero-buttons">
                        <a href="#" onClick={() => showPage('projects')} className="btn btn-primary">
                            <i className="fas fa-briefcase"></i> View Projects
                        </a>
                        <a href="#" onClick={() => showPage('blog')} className="btn btn-secondary">
                            <i className="fas fa-blog"></i> Read Blog
                        </a>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="code-window">
                        <div className="code-header">
                            <div className="code-dot red"></div>
                            <div className="code-dot yellow"></div>
                            <div className="code-dot green"></div>
                        </div>
                        <div className="code-content">
                            <div className="code-line"><span style={{color: "#f472b6"}}>const</span> <span style={{color: "#60a5fa"}}>developer</span> = {'{'}</div>
                            <div className="code-line">  <span style={{color: "#fbbf24"}}>name</span>: <span style={{color: "#86efac"}}>"Alex Chen"</span>,</div>
                            <div className="code-line">  <span style={{color: "#fbbf24"}}>role</span>: <span style={{color: "#86efac"}}>"Full-Stack Developer"</span>,</div>
                            <div className="code-line">  <span style={{color: "#fbbf24"}}>passion</span>: <span style={{color: "#86efac"}}>"Building cool stuff"</span>,</div>
                            <div className="code-line">  <span style={{color: "#fbbf24"}}>status</span>: <span style={{color: "#86efac"}}>"Always learning"</span></div>
                            <div className="code-line">{'}'};</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </div>

      {/* About Page */}
    <div id="about" className={`page ${activePage === 'about' ? 'active' : ''}`}>
        <section className="section">
            <div className="section-header reveal">
                <h2 className="section-title">About Me</h2>
                <p className="section-subtitle">Crafting digital experiences with passion and precision</p>
            </div>
            <div className="about-content reveal">
                <div className="about-image">
                    <div className="image-frame">
                        <img src="https://picsum.photos/seed/developer/400/400.jpg" alt="Alex Chen" />
                    </div>
                </div>
                <div className="about-text">
                    <h3>Building the Future, One Line at a Time</h3>
                    <p>With over 8 years of experience in software development and entrepreneurship, I've had the privilege of working with startups and established companies to bring innovative ideas to life.</p>
                    <p>My journey began with a curiosity about how things work and evolved into a passion for creating solutions that solve real-world problems. I believe in the power of technology to transform businesses and improve lives.</p>
                    <div className="stats">
                        <div className="stat">
                            <div className="stat-number">50+</div>
                            <div className="stat-label">Projects Delivered</div>
                        </div>
                        <div className="stat">
                            <div className="stat-number">8+</div>
                            <div className="stat-label">Years Experience</div>
                        </div>
                        <div className="stat">
                            <div className="stat-number">15+</div>
                            <div className="stat-label">Happy Clients</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

    {/* Skills Page */}
    <div id="skills" className={`page ${activePage === 'skills' ? 'active' : ''}`}>
        <section className="section">
            <div className="section-header reveal">
                <h2 className="section-title">Skills & Expertise</h2>
                <p className="section-subtitle">Technologies I love working with</p>
            </div>
            <div className="skills-grid">
                <div className="skill-card reveal">
                    <div className="skill-icon">
                        <i className="fas fa-code"></i>
                    </div>
                    <h3 className="skill-title">Frontend Development</h3>
                    <p className="skill-description">React, Vue, TypeScript, Tailwind CSS, Next.js</p>
                </div>
                <div className="skill-card reveal">
                    <div className="skill-icon">
                        <i className="fas fa-server"></i>
                    </div>
                    <h3 className="skill-title">Backend Development</h3>
                    <p className="skill-description">Node.js, Python, PostgreSQL, MongoDB, GraphQL</p>
                </div>
                <div className="skill-card reveal">
                    <div className="skill-icon">
                        <i className="fas fa-cloud"></i>
                    </div>
                    <h3 className="skill-title">Cloud & DevOps</h3>
                    <p className="skill-description">AWS, Docker, Kubernetes, CI/CD, Terraform</p>
                </div>
                <div className="skill-card reveal">
                    <div className="skill-icon">
                        <i className="fas fa-mobile-alt"></i>
                    </div>
                    <h3 className="skill-title">Mobile Development</h3>
                    <p className="skill-description">React Native, Flutter, iOS, Android</p>
                </div>
                <div className="skill-card reveal">
                    <div className="skill-icon">
                        <i className="fas fa-chart-line"></i>
                    </div>
                    <h3 className="skill-title">Product Strategy</h3>
                    <p className="skill-description">Market Research, MVP Development, Growth Hacking</p>
                </div>
                <div className="skill-card reveal">
                    <div className="skill-icon">
                        <i className="fas fa-users"></i>
                    </div>
                    <h3 className="skill-title">Team Leadership</h3>
                    <p className="skill-description">Agile Methodology, Project Management, Mentoring</p>
                </div>
            </div>
        </section>
    </div>

    {/* Projects Page */}
    <div id="projects" className={`page ${activePage === 'projects' ? 'active' : ''}`}>
        <section className="section">
            <div className="section-header reveal">
                <h2 className="section-title">Featured Projects</h2>
                <p className="section-subtitle">Some of my recent work</p>
            </div>
            <div className="projects-grid">
                <div className="project-card reveal">
                    <img src="https://picsum.photos/seed/project1/400/200.jpg" alt="Project 1" className="project-image" />
                    <div className="project-content">
                        <h3 className="project-title">E-Commerce Platform</h3>
                        <p className="project-description">A scalable e-commerce solution serving 10k+ daily users with real-time inventory management.</p>
                        <div className="project-tags">
                            <span className="tag">React</span>
                            <span className="tag">Node.js</span>
                            <span className="tag">MongoDB</span>
                            <span className="tag">AWS</span>
                        </div>
                    </div>
                </div>
                <div className="project-card reveal">
                    <img src="https://picsum.photos/seed/project2/400/200.jpg" alt="Project 2" className="project-image" />
                    <div className="project-content">
                        <h3 className="project-title">AI Analytics Dashboard</h3>
                        <p className="project-description">Machine learning powered analytics platform providing actionable insights for businesses.</p>
                        <div className="project-tags">
                            <span className="tag">Python</span>
                            <span className="tag">TensorFlow</span>
                            <span className="tag">Vue.js</span>
                            <span className="tag">PostgreSQL</span>
                        </div>
                    </div>
                </div>
                <div className="project-card reveal">
                    <img src="https://picsum.photos/seed/project3/400/200.jpg" alt="Project 3" className="project-image" />
                    <div className="project-content">
                        <h3 className="project-title">Social Networking App</h3>
                        <p className="project-description">Mobile-first social platform with real-time messaging and content sharing features.</p>
                        <div className="project-tags">
                            <span className="tag">React Native</span>
                            <span className="tag">Firebase</span>
                            <span className="tag">Redux</span>
                            <span className="tag">WebRTC</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

    {/* Blog Page */}
    <div id="blog" className={`page ${activePage === 'blog' ? 'active' : ''}`}>
        <div className="blog-container">
            <div className="blog-header">
                <h1 className="blog-title">Blog</h1>
                <div className="blog-actions">
                    <div className="search-box">
                        <i className="fas fa-search"></i>
                        <input type="text" id="blogSearch" placeholder="Search posts..." onChange={handleSearch} />
                    </div>
                    <button className="btn btn-primary" onClick={() => showPage('editor')}>
                        <i className="fas fa-plus"></i> New Post
                    </button>
                </div>
            </div>
            <div className="category-filter">
                <button className={`category-btn ${currentFilter === 'all' ? 'active' : ''}`} onClick={() => handleFilterClick('all')}>All</button>
                <button className={`category-btn ${currentFilter === 'Technology' ? 'active' : ''}`} onClick={() => handleFilterClick('Technology')}>Technology</button>
                <button className={`category-btn ${currentFilter === 'Business' ? 'active' : ''}`} onClick={() => handleFilterClick('Business')}>Business</button>
                <button className={`category-btn ${currentFilter === 'Design' ? 'active' : ''}`} onClick={() => handleFilterClick('Design')}>Design</button>
                <button className={`category-btn ${currentFilter === 'Tutorial' ? 'active' : ''}`} onClick={() => handleFilterClick('Tutorial')}>Tutorial</button>
            </div>
            <div className="blog-grid" id="blogGrid">
                {filteredPosts.map(post => (
                    <div className="blog-card" key={post.id} onClick={() => viewPost(post.id)}>
                        <img src={post.image} alt={post.title} className="blog-image" />
                        <div className="blog-content">
                            <div className="blog-meta">
                                <span className="blog-category">{post.category}</span>
                                <span>{formatDate(post.date)}</span>
                            </div>
                            <h3 className="blog-card-title">{post.title}</h3>
                            <p className="blog-excerpt">{post.excerpt}</p>
                            <a href="#" className="blog-read-more">
                                Read More <i className="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>

    {/* Blog Post View */}
    <div id="blogPost" className={`page ${activePage === 'blogPost' ? 'active' : ''}`}>
        {currentPost && (
            <div className="blog-post">
                <button className="btn btn-secondary" onClick={() => showPage('blog')} style={{marginBottom: "2rem"}}>
                    <i className="fas fa-arrow-left"></i> Back to Blog
                </button>
                <div className="blog-post-header">
                    <h1 className="blog-post-title">{currentPost.title}</h1>
                    <div className="blog-post-meta">
                        <span><i className="fas fa-calendar"></i> {formatDate(currentPost.date)}</span>
                        <span><i className="fas fa-clock"></i> {currentPost.readTime} min read</span>
                        <span className="blog-category">{currentPost.category}</span>
                    </div>
                </div>
                <img className="blog-post-image" src={currentPost.image} alt={currentPost.title} />
                <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: currentPost.content }}></div>
            </div>
        )}
    </div>

    {/* Blog Editor */}
    <div id="editor" className={`page ${activePage === 'editor' ? 'active' : ''}`}>
        <div className="editor-container">
            <div className="editor-header">
                <h1 className="editor-title">Create New Post</h1>
            </div>
            <form className="editor-form" id="editorForm" onSubmit={handleNewPostSubmit}>
                <div className="form-group">
                    <label className="form-label">Title</label>
                    <input type="text" className="form-input" name="title" placeholder="Enter post title..." required value={newPost.title} onChange={handleNewPostChange} />
                </div>
                <div className="form-group">
                    <label className="form-label">Category</label>
                    <select className="form-select" name="category" required value={newPost.category} onChange={handleNewPostChange}>
                        <option value="">Select category...</option>
                        <option value="Technology">Technology</option>
                        <option value="Business">Business</option>
                        <option value="Design">Design</option>
                        <option value="Tutorial">Tutorial</option>
                    </select>
                </div>
                <div className="form-group">
                    <label className="form-label">Excerpt</label>
                    <textarea className="form-textarea" name="excerpt" placeholder="Brief description of your post..." required value={newPost.excerpt} onChange={handleNewPostChange}></textarea>
                </div>
                <div className="form-group">
                    <label className="form-label">Image URL</label>
                    <input type="url" className="form-input" name="image" placeholder="https://example.com/image.jpg" value={newPost.image} onChange={handleNewPostChange} />
                </div>
                <div className="form-group">
                    <label className="form-label">Content</label>
                    <div className="editor-toolbar">
                        <button type="button" className="editor-btn" title="Bold">
                            <i className="fas fa-bold"></i>
                        </button>
                        <button type="button" className="editor-btn" title="Italic">
                            <i className="fas fa-italic"></i>
                        </button>
                        <button type="button" className="editor-btn" title="Underline">
                            <i className="fas fa-underline"></i>
                        </button>
                        <button type="button" className="editor-btn" title="Bullet List">
                            <i className="fas fa-list-ul"></i>
                        </button>
                        <button type="button" className="editor-btn" title="Numbered List">
                            <i className="fas fa-list-ol"></i>
                        </button>
                        <button type="button" className="editor-btn" title="Heading">
                            <i className="fas fa-heading"></i>
                        </button>
                        <button type="button" className="editor-btn" title="Link">
                            <i className="fas fa-link"></i>
                        </button>
                        <button type="button" className="editor-btn" title="Code">
                            <i className="fas fa-code"></i>
                        </button>
                        <button type="button" className="editor-btn" title="Quote">
                            <i className="fas fa-quote-left"></i>
                        </button>
                    </div>
                    <div className="editor-content" contentEditable="true" placeholder="Start writing your post..." onInput={handleContentChange} dangerouslySetInnerHTML={{ __html: newPost.content }}></div>
                </div>
                <div className="editor-actions">
                    <button type="button" className="btn btn-secondary" onClick={() => showPage('blog')}>Cancel</button>
                    <button type="submit" className="btn btn-primary">Publish Post</button>
                </div>
            </form>
        </div>
    </div>

    {/* Experience Page */}
    <div id="experience" className={`page ${activePage === 'experience' ? 'active' : ''}`}>
        <section className="section">
            <div className="section-header reveal">
                <h2 className="section-title">Experience</h2>
                <p className="section-subtitle">My professional journey</p>
            </div>
            <div className="timeline">
                <div className="timeline-item reveal">
                    <div className="timeline-content">
                        <div className="timeline-date">2021 - Present</div>
                        <h3 className="timeline-title">CTO & Co-Founder</h3>
                        <p className="timeline-company">TechStart Inc.</p>
                        <p className="timeline-description">Leading product development and engineering team to build innovative SaaS solutions.</p>
                        <div className="timeline-dot"></div>
                    </div>
                </div>
                <div className="timeline-item reveal">
                    <div className="timeline-content">
                        <div className="timeline-date">2019 - 2021</div>
                        <h3 className="timeline-title">Senior Full-Stack Developer</h3>
                        <p className="timeline-company">Digital Solutions Ltd.</p>
                        <p className="timeline-description">Architected and developed enterprise-level applications for Fortune 500 clients.</p>
                        <div className="timeline-dot"></div>
                    </div>
.
                </div>
                <div className="timeline-item reveal">
                    <div className="timeline-content">
                        <div className="timeline-date">2017 - 2019</div>
                        <h3 className="timeline-title">Frontend Developer</h3>
                        <p className="timeline-company">Creative Agency</p>
                        <p className="timeline-description">Built responsive web applications and improved user experience for various clients.</p>
                        <div className="timeline-dot"></div>
                    </div>
                </div>
            </div>
        </section>
    </div>

    {/* Contact Page */}
    <div id="contact" className={`page ${activePage === 'contact' ? 'active' : ''}`}>
        <section className="section contact">
            <div className="section-header reveal">
                <h2 className="section-title">Let's Connect</h2>
                <p className="section-subtitle">I'm always open to discussing new opportunities</p>
            </div>
            <div className="contact-content reveal">
                <p>Whether you have a project in mind or just want to chat about technology, feel free to reach out!</p>
                <div className="hero-buttons" style={{justifyContent: "center", marginTop: "2rem"}}>
                    <a href="mailto:alex@example.com" className="btn btn-primary">
                        <i className="fas fa-envelope"></i> Send Email
                    </a>
                    <a href="#" className="btn btn-secondary">
                        <i className="fas fa-download"></i> Download CV
                    </a>
                </div>
                <div className="social-links">
                    <a href="#" className="social-link">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="#" className="social-link">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="#" className="social-link">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="social-link">
                        <i className="fab fa-dribbble"></i>
                    </a>
                </div>
            </div>
        </section>
    </div>

    {/* Footer */}
    <footer>
        <p>&copy; 2024 Alex Chen. Designed with ❤️ and lots of ☕</p>
    </footer>

    {/* Toast Notification */}
    <div className="toast" id="toast"></div>
    </div>
  );
};

export default Portfolio;
