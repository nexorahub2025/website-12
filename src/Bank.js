import React, { useState } from "react";
import "./CoursePage.css";

export default function BankExam() {
    const [openIndex, setOpenIndex] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

    const syllabus = [
        {
            title: "Module 1 — Quantitative Aptitude",
            duration: "4 weeks",
            items: [
                "Number system, Simplification, Approximation",
                "Arithmetic: Profit & Loss, Time & Work, Time & Distance",
                "Data Interpretation, Quadratic Equations",
                "Bank PO-level Advanced Maths Practice",
            ],
        },
        {
            title: "Module 2 — Reasoning Ability",
            duration: "4 weeks",
            items: [
                "Puzzles (Box, Floor, Scheduling)",
                "Blood relations, Directions, Coding-Decoding",
                "Syllogisms, Seating Arrangements",
                "Prelims + Mains Reasoning Practice Sets",
            ],
        },
        {
            title: "Module 3 — English Language",
            duration: "3 weeks",
            items: [
                "Reading Comprehension",
                "Error detection, Para jumbles",
                "Vocabulary, Cloze test",
                "Grammar mastery with shortcuts",
            ],
        },
        {
            title: "Module 4 — Banking Awareness + Mock Exams",
            duration: "3 weeks",
            items: [
                "Current Affairs (Banking + Economy)",
                "Static GK — RBI, SEBI, NABARD",
                "Full-length Prelims & Mains mock tests",
                "Interview preparation",
            ],
        },
    ];

    const projects = [
        { name: "30 Full-Length Mock Exams", desc: "IBPS PO, Clerk, SBI PO, RRB exams formatted practice." },
        { name: "Daily Topic-Wise Tests", desc: "Quant, Reasoning, English, Banking Awareness." },
        { name: "Speed Improvement Dashboard", desc: "Track speed, accuracy & weak areas." },
        { name: "Interview Practice Module", desc: "HR questions, Banking domain questions, mock interviews." },
    ];

    const reviews = [
        { name: "Vamsi", text: "Excellent faculty! The mock tests helped me clear IBPS Prelims." },
        { name: "Sravani", text: "Reasoning shortcuts were amazing. Best bank coaching experience!" },
        { name: "Arjun", text: "Daily quizzes & doubt clearing sessions were very helpful." },
    ];

    return (
        <div className="pf-container">

            {/* ⭐ UNIVERSAL HEADER ⭐ */}
            <header className="top-header">
                <div className="brand">
                    <div className="logo">N</div>
                    <div className="brand-text">
                        <div className="brand-name">NexoraHub</div>
                        <div className="brand-tag">Learn. Grow. Excel.</div>
                    </div>
                </div>

                <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    ☰
                </div>

                <nav className={`nh-nav ${menuOpen ? "active" : ""}`}>
                    <a href="/">Home</a>
                    <a href="/#courses">Courses</a>
                    <a href="/#services">Services</a>
                    <a href="/#trainers">Trainers</a>
                    <a href="/#contact">Contact</a>
                </nav>
            </header>

            {/* HERO SECTION */}
            <section className="pf-hero">
                <div className="pf-hero-inner">
                    <div className="pf-hero-left">
                        <h1>Bank Exam Coaching (IBPS, SBI, RRB)</h1>
                        <p className="pf-sub">
                            Crack IBPS PO, Clerk, RRB, and SBI Exams with our structured training program,
                            mocks, and daily practice tests.
                        </p>

                        <div className="pf-cta-row">
                            <a href="https://forms.gle/peNrEn4xtz7Qx1bN6" target="_blank" rel="noopener noreferrer" className="btn-primary full">
                                Enroll Now
                            </a>
                            <a href="#syllabus" className="btn-outline">View Syllabus</a>
                            <a href="#contact" className="btn-tertiary">Contact Us</a>
                        </div>

                        <div className="pf-highlights">
                            <div><strong>Duration:</strong> 10–12 weeks</div>
                            <div><strong>Level:</strong> Beginner → Advanced</div>
                            <div><strong>Students:</strong> 1,200+ Enrolled</div>
                        </div>
                    </div>

                    {/* PRICE CARD */}
                    <aside className="pf-aside">
                        <div className="pf-card sticky-card">
                            <div className="price">₹5,999</div>
                            <div className="small">One-time payment (EMI available)</div>
                            <a href="https://forms.gle/peNrEn4xtz7Qx1bN6" target="_blank" rel="noopener noreferrer" className="btn-primary full">
                                Enroll Now
                            </a>
                            <button className="btn-outline full">Download Syllabus</button>
                            <ul className="aside-features">
                                <li>Live classes</li>
                                <li>Daily Mock Tests</li>
                                <li>Weekly Assessments</li>
                                <li>Interview Preparation</li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </section>

            {/* WHAT YOU'LL LEARN */}
            <section className="pf-section learn">
                <h2>What you'll learn</h2>
                <div className="learn-grid">
                    <div className="learn-item">Quantitative Aptitude</div>
                    <div className="learn-item">Advanced Reasoning Ability</div>
                    <div className="learn-item">English for Bank Exams</div>
                    <div className="learn-item">Banking Awareness</div>
                    <div className="learn-item">Mock Exams & Strategy</div>
                    <div className="learn-item">Interview Preparation</div>
                </div>
            </section>

            {/* SYLLABUS */}
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
                                    {m.items.map((t, k) => <li key={k}>{t}</li>)}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* PROJECTS */}
            <section className="pf-section projects">
                <h2>Practice & Mock Tests</h2>
                <div className="projects-grid">
                    {projects.map((p, i) => (
                        <div className="project-card" key={i}>
                            <div className="project-title">{p.name}</div>
                            <div className="project-desc">{p.desc}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* REVIEWS */}
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

            {/* CONTACT */}
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
