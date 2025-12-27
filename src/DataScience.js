import React, { useState } from "react";
import "./CoursePage.css";

export default function DataScience() {
    const [openIndex, setOpenIndex] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);

    const syllabus = [
        {
            title: "Module 1 — Python for Data Science",
            duration: "3 weeks",
            items: [
                "Python basics, control flow, functions",
                "NumPy, Pandas, Matplotlib, Seaborn",
                "Data cleaning, preprocessing, handling missing data",
            ],
        },
        {
            title: "Module 2 — Statistics & Data Analysis",
            duration: "3 weeks",
            items: [
                "Descriptive & inferential statistics",
                "Probability, distributions, hypothesis testing",
                "Exploratory Data Analysis (EDA) with real datasets",
            ],
        },
        {
            title: "Module 3 — Machine Learning",
            duration: "4 weeks",
            items: [
                "Supervised learning — Regression, Classification",
                "Unsupervised learning — Clustering, Dimensionality Reduction",
                "Model evaluation, hyperparameter tuning, ML pipelines",
            ],
        },
        {
            title: "Module 4 — AI Tools, Cloud & Deployment",
            duration: "3 weeks",
            items: [
                "Deep Learning basics with TensorFlow/Keras",
                "Building APIs with Flask/FastAPI",
                "Deploy ML models on AWS / Render",
            ],
        },
    ];

    const projects = [
        { name: "Sales Prediction Model", desc: "Predict future sales using regression with ML algorithms." },
        { name: "Customer Segmentation", desc: "Cluster users using K-Means for marketing insights." },
        { name: "Spam Email Detection", desc: "Build NLP-based classifier to detect spam messages." },
        { name: "Movie Recommendation System", desc: "Collaborative + Content-based filtering recommendation engine." },
    ];

    const reviews = [
        { name: "Anusha", text: "Perfect for beginners! Projects helped me get confidence." },
        { name: "Mahesh", text: "Machine learning module was explained very clearly." },
        { name: "Ravi Teja", text: "Amazing course with real datasets and hands-on tasks!" },
    ];

    const toggle = (i) => setOpenIndex(openIndex === i ? null : i);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <div className="pf-container">
            {/* ================= NAVBAR ================= */}
            <header className="top-header">
                <div className="brand">
                    <div className="logo">DS</div>
                    <div className="brand-text">
                        <div className="brand-name">Data Science & ML</div>
                        <div className="brand-tag">Python, ML, AI Tools & Deployment</div>
                    </div>
                </div>
                <div className="hamburger" onClick={toggleMenu}>☰</div>
                <nav className={`nh-nav ${menuOpen ? "active" : ""}`}>
                    <a href="/">Home</a>
                    <a href="#syllabus">Syllabus</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </nav>
            </header>

            {/* ================= HERO ================= */}
            <section className="pf-hero">
                <div className="pf-hero-inner">
                    <div className="pf-hero-left">
                        <h1>Data Science & Machine Learning</h1>
                        <p className="pf-sub">
                            Learn Python, Statistics, Machine Learning, AI Tools & Deployment using real-world datasets.
                        </p>

                        <div className="pf-cta-row">
                            <a href="https://forms.gle/peNrEn4xtz7Qx1bN6" target="_blank" rel="noopener noreferrer" className="btn-primary full">
                                Enroll Now
                            </a>
                            <a href="#syllabus" className="btn-outline">View Syllabus</a>
                            <a href="#contact" className="btn-tertiary">Contact Us</a>
                        </div>

                        <div className="pf-highlights">
                            <div><strong>Duration:</strong> 12–14 weeks</div>
                            <div><strong>Level:</strong> Beginner → Advanced</div>
                            <div><strong>Students:</strong> 2+ Enrolled</div>
                        </div>
                    </div>

                    {/* Price Card */}
                    <aside className="pf-aside">
                        <div className="pf-card sticky-card">
                            <div className="price">₹4,999</div>
                            <div className="small">One-time payment (EMI available)</div>
                            <a href="https://forms.gle/peNrEn4xtz7Qx1bN6" target="_blank" rel="noopener noreferrer" className="btn-primary full">
                                Enroll Now
                            </a>
                            <button className="btn-outline full">Download Syllabus</button>
                            <ul className="aside-features">
                                <li>Live classes</li>
                                <li>Hands-on ML Projects</li>
                                <li>Certificate</li>
                                <li>Placement Assistance</li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </section>

            {/* ================= WHAT YOU'LL LEARN ================= */}
            <section className="pf-section learn" id="learn">
                <h2>What you'll learn</h2>
                <div className="learn-grid">
                    <div className="learn-item">Python for Data Science</div>
                    <div className="learn-item">Statistics & Analysis</div>
                    <div className="learn-item">Machine Learning Algorithms</div>
                    <div className="learn-item">EDA & Visualization</div>
                    <div className="learn-item">Model Deployment</div>
                    <div className="learn-item">Cloud Deployment (AWS)</div>
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
                <h2>Projects You'll Build</h2>
                <div className="projects-grid">
                    {projects.map((p, idx) => (
                        <div className="project-card" key={idx}>
                            <div className="project-title">{p.name}</div>
                            <div className="project-desc">{p.desc}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= REVIEWS ================= */}
            <section className="pf-section reviews">
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
                    <a href="mailto:nexorahub2025@gmail.com" className="btn-outline">Email Us</a>
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
