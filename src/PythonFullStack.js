import React, { useState } from "react";
import "./CoursePage.css";

export default function PythonFullStack() {
    const [openIndex, setOpenIndex] = useState(null);

    const syllabus = [
        {
            title: "Module 1 — Python Foundations",
            duration: "2 weeks",
            items: [
                "Python basics, data types, variables",
                "Control flow, functions, modules",
                "OOP concepts, exceptions, file I/O",
            ],
        },
        {
            title: "Module 2 — Web Backend (Flask / Django)",
            duration: "3 weeks",
            items: [
                "App structure, routing, templating",
                "REST APIs, authentication, middleware",
                "ORM, migrations, database models (MySQL)",
            ],
        },
        {
            title: "Module 3 — Frontend (React)",
            duration: "3 weeks",
            items: [
                "HTML5, modern CSS, responsive design",
                "JavaScript ES6+, components & hooks",
                "Integrating React with backend APIs",
            ],
        },
        {
            title: "Module 4 — DevOps & Deployment",
            duration: "2 weeks",
            items: [
                "Git, GitHub workflows, CI basics",
                "Hosting on AWS / Render, environment setup",
                "Application monitoring & security basics",
            ],
        },
    ];

    const projects = [
        {
            name: "Job Portal Web App",
            desc: "Users register, upload resumes, search & apply for jobs; employers post openings.",
        },
        {
            name: "E-Commerce Dashboard",
            desc: "Product CRUD, cart flow, payment integration (demo), admin dashboard.",
        },
        {
            name: "Student Management System",
            desc: "Role-based access, reporting, upload/download, CSV exports.",
        },
        {
            name: "AI Chatbot Integration",
            desc: "Simple chatbot that uses NLP to answer FAQs (demo pipeline).",
        },
    ];

    const reviews = [
        { name: "Priya", text: "Practical, mentor-led sessions — helped me get my first job." },
        { name: "Rahul Verma", text: "Best project-driven course. Highly recommended." },
        { name: "Sneha", text: "Clear explanations and great support from trainers." },
    ];

    const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

    const toggleMenu = () => {
        document.querySelector(".nh-nav").classList.toggle("active");
    };

    return (
        <div id="python-page" className="pf-container">

            {/* ================= NAVBAR (Updated Brand) ================= */}
            <header className="top-header">
                <div className="brand">
                    <div className="logo">P</div>
                    <div className="brand-text">
                        <div className="brand-name">PythonFullStack</div>
                        <div className="brand-tag">Learn. Build. Master.</div>
                    </div>
                </div>

                <nav className="nh-nav">
                    <a href="/" >Home</a>
                    <a href="#syllabus" onClick={(e) => { e.preventDefault(); document.querySelector("#syllabus").scrollIntoView({ behavior: "smooth" }); }}>Syllabus</a>
                    <a href="#projects" onClick={(e) => { e.preventDefault(); document.querySelector("#projects").scrollIntoView({ behavior: "smooth" }); }}>Projects</a>
                    <a href="#reviews" onClick={(e) => { e.preventDefault(); document.querySelector("#reviews").scrollIntoView({ behavior: "smooth" }); }}>Reviews</a>
                    <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector("#contact").scrollIntoView({ behavior: "smooth" }); }}>Contact</a>
                </nav>

                <div className="hamburger" onClick={toggleMenu}>☰</div>
            </header>

            {/* ================= HERO SECTION ================= */}
            <section id="pythontop" className="pf-hero">
                <div className="pf-hero-inner">
                    <div className="pf-hero-left">
                        <h1>Python Full Stack Development</h1>
                        <p className="pf-sub">
                            Become an industry-ready Full Stack developer — learn Python, Django/Flask,
                            React, Databases & Deployment with real projects and mentor support.
                        </p>

                        <div className="pf-cta-row">
                            <a href="https://forms.gle/peNrEn4xtz7Qx1bN6" target="_blank" rel="noopener noreferrer" className="btn-primary full">Enroll Now</a>
                            <a href="#syllabus" className="btn-outline" onClick={(e) => { e.preventDefault(); document.querySelector("#syllabus").scrollIntoView({ behavior: "smooth" }); }}>View Syllabus</a>
                            <a className="btn-tertiary" href="#contact">Contact Us</a>
                        </div>

                        <div className="pf-highlights">
                            <div><strong>Duration:</strong> 10–12 weeks</div>
                            <div><strong>Level:</strong> Beginner → Advanced</div>
                            <div><strong>Students:</strong> 2+ Enrolled</div>
                        </div>
                    </div>

                    <aside className="pf-aside">
                        <div className="pf-card sticky-card">
                            <div className="price">₹4,999</div>
                            <div className="small">One-time payment (or EMI available)</div>
                            <a href="https://forms.gle/peNrEn4xtz7Qx1bN6" target="_blank" rel="noopener noreferrer" className="btn-primary full">Enroll Now</a>
                            <button className="btn-outline full">Download Syllabus</button>

                            <ul className="aside-features">
                                <li>Live classes</li>
                                <li>Hands-on Projects</li>
                                <li>Certificate</li>
                                <li>Placement Guidance</li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </section>

            {/* ================= WHAT YOU LEARN ================= */}
            <section className="pf-section learn" id="learn">
                <h2>What you'll learn</h2>
                <div className="learn-grid">
                    <div className="learn-item">Build full-stack web applications</div>
                    <div className="learn-item">Design & consume RESTful APIs</div>
                    <div className="learn-item">Deploy apps to cloud (AWS / Render)</div>
                    <div className="learn-item">Use Git & collaborate on projects</div>
                    <div className="learn-item">Create production-ready React frontends</div>
                    <div className="learn-item">Integrate SQL databases & ORM</div>
                </div>
            </section>

            {/* ================= SYLLABUS ================= */}
            <section className="pf-section" id="syllabus">
                <h2>Detailed Curriculum</h2>
                <div className="accordion-wrap">
                    {syllabus.map((m, i) => (
                        <div key={i} className={`accordion ${openIndex === i ? "open" : ""}`}>
                            <button className="accordion-head" onClick={() => toggle(i)}>
                                <div>
                                    <h3>{m.title}</h3>
                                    <div className="muted">{m.duration}</div>
                                </div>
                                <div className="accordion-icon">{openIndex === i ? "−" : "+"}</div>
                            </button>
                            <div className="accordion-body">
                                <ul>
                                    {m.items.map((topic, t) => <li key={t}>{topic}</li>)}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= PROJECTS ================= */}
            <section className="pf-section projects" id="projects">
                <h2>Real Projects You'll Build</h2>
                <div className="projects-grid">
                    {projects.map((p, idx) => (
                        <div className="project-card" key={idx}>
                            <div className="project-title">{p.name}</div>
                            <div className="project-desc">{p.desc}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= TRAINER ================= */}
            <section className="pf-section instructor">
                <h2>Meet Your Trainers</h2>
                <div className="team-grid">
                    <div className="team-card">
                        <div className="trainer-img-wrapper">
                            <img src="/image/3.jpg" alt="Sowmika" className="trainer-img" />
                        </div>
                        <h3>Sowmika</h3>
                        <p>Senior Full Stack Trainer — 6+ years experience building production apps & mentoring 1000+ students.</p>
                    </div>
                </div>
            </section>

            {/* ================= REVIEWS ================= */}
            <section className="pf-section reviews" id="reviews">
                <h2>Student Reviews</h2>
                <div className="reviews-row">
                    {reviews.map((r, i) => (
                        <div className="review-card" key={i}>
                            <p className="quote">“{r.text}”</p>
                            <div className="author">— {r.name}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= CONTACT ================= */}
            <section className="pf-section contact" id="contact">
                <h2>Contact / Enroll</h2>
                <p>Have questions? Call or WhatsApp us — we're here to help!</p>
                <div className="contact-row">
                    <a href="mailto:pythonfullstack@example.com" className="btn-outline">Email Us</a>
                    <a href="tel:+91 7286842779" className="btn-primary">Call / WhatsApp</a>
                </div>
            </section>
            <footer className="site-footer">
                <p>© 2025 Skill Tree Academy / NexoraHub</p>

                <div className="footer-legal">
                    <a href="/public/privacy.pdf" target="_blank">Privacy Policy</a>
                    <a href="/public/Terms.pdf" target="_blank">Terms & Conditions</a>
                    <a href="/public/refund.pdf" target="_blank">Refund Policy</a>
                </div>
            </footer>
        </div>
    );
}
