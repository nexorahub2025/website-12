import React, { useState } from "react";
import "./CoursePage.css";

export default function GatePreparation() {
    const [openIndex, setOpenIndex] = useState(null);

    const syllabus = [
        {
            title: "Module 1 — Engineering Mathematics",
            duration: "3 weeks",
            items: [
                "Linear Algebra, Calculus, Differential equations",
                "Probability, Statistics, Numerical Methods",
                "Transforms: Laplace, Fourier",
            ],
        },
        {
            title: "Module 2 — General Aptitude",
            duration: "2 weeks",
            items: [
                "Verbal Ability: Grammar, Comprehension, Vocabulary",
                "Quantitative Aptitude: Arithmetic, Algebra, Data Interpretation",
                "Reasoning & Analytical Skills",
            ],
        },
        {
            title: "Module 3 — Core Technical Subjects",
            duration: "6–8 weeks",
            items: [
                "Subject-wise in-depth GATE syllabus coverage",
                "PYQ analysis for last 20 years",
                "Concept strengthening + problem solving",
            ],
        },
        {
            title: "Module 4 — Test Series & Revision",
            duration: "3 weeks",
            items: [
                "Topic-wise tests",
                "Full-length mock exams",
                "Revision & time management techniques",
                "GATE exam strategy & scoring tips",
            ],
        },
    ];

    const projects = [
        {
            name: "PYQ Analysis (Last 20 Years)",
            desc: "Complete analysis of question patterns and frequently repeated topics.",
        },
        {
            name: "Personal Performance Dashboard",
            desc: "Track your mock test progress, accuracy, and time management.",
        },
        {
            name: "GATE Mock Exam Simulation",
            desc: "Practice in a real GATE-like exam environment.",
        },
        {
            name: "Subject Mastery Sheets",
            desc: "Quick review sheets for faster revision before exam day.",
        },
    ];

    const reviews = [
        { name: "Rahul M", text: "Best GATE coaching with structured syllabus. Mock tests helped a lot." },
        { name: "Sneha P", text: "Concept clarity and doubt solving were excellent." },
        { name: "Anil Kumar", text: "I improved my score by 40+ marks because of their PYQ practice." },
    ];

    const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

    return (
        <div className="pf-container">
            {/* Hero */}
            <section className="pf-hero">
                <div className="pf-hero-inner">
                    <div className="pf-hero-left">
                        <h1>GATE Preparation Course</h1>
                        <p className="pf-sub">
                            Complete GATE coaching with Engineering Mathematics, Aptitude, Core Subjects,
                            PYQs, Mock Tests & Full-Length Test Series.
                        </p>

                        <div className="pf-cta-row">
                            <a
                                href="https://forms.gle/peNrEn4xtz7Qx1bN6"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary full"
                            >
                                Enroll Now
                            </a>
                            <a href="#syllabus" className="btn-outline">View Syllabus</a>
                            <a className="btn-tertiary" href="#contact">Contact Us</a>
                        </div>

                        <div className="pf-highlights">
                            <div><strong>Duration:</strong> 12–16 weeks</div>
                            <div><strong>Level:</strong> Beginner → Advanced</div>
                            <div><strong>Students:</strong> 1500+ Trained</div>
                        </div>
                    </div>

                    <aside className="pf-aside">
                        <div className="pf-card sticky-card">
                            <div className="price">₹6,499</div>
                            <div className="small">One-time payment (EMI available)</div>
                            <a
                                href="https://forms.gle/peNrEn4xtz7Qx1bN6"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary full"
                            >
                                Enroll Now
                            </a>
                            <button className="btn-outline full">Download Syllabus</button>
                            <ul className="aside-features">
                                <li>Live Classes</li>
                                <li>Mock Tests</li>
                                <li>PYQ Practice</li>
                                <li>Revision Sessions</li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </section>

            {/* What you'll learn */}
            <section className="pf-section learn" id="learn">
                <h2>What you'll learn</h2>
                <div className="learn-grid">
                    <div className="learn-item">Strong command on GATE Mathematics</div>
                    <div className="learn-item">Master General Aptitude</div>
                    <div className="learn-item">Complete Technical Subject Coverage</div>
                    <div className="learn-item">PYQ Solving Techniques</div>
                    <div className="learn-item">Mock Exam Practice</div>
                    <div className="learn-item">Time & Accuracy Management</div>
                </div>
            </section>

            {/* Syllabus */}
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

            {/* Projects / Practicals */}
            <section className="pf-section projects">
                <h2>Practice & Mock Modules</h2>
                <div className="projects-grid">
                    {projects.map((p, idx) => (
                        <div className="project-card" key={idx}>
                            <div className="project-title">{p.name}</div>
                            <div className="project-desc">{p.desc}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Reviews */}
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

            {/* Contact */}
            <section className="pf-section contact" id="contact">
                <h2>Contact / Enroll</h2>
                <p>Have questions? Call or WhatsApp us — we're here to help!</p>
                <div className="contact-row">
                    <a href="mailto:nexorahub2025@gmail.com" className="btn-outline">Email Us</a>
                    <a href="tel:+91 7286842779" className="btn-primary">Call / WhatsApp</a>
                </div>
            </section>

            <footer className="pf-footer">
                © {new Date().getFullYear()} NexoraHub — All rights reserved.
            </footer>
        </div>
    );
}
