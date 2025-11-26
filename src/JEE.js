import React, { useState } from "react";
import "./CoursePage.css";

export default function JEEExam() {
    const [openIndex, setOpenIndex] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);

    const syllabus = [
        {
            title: "Module 1 — Physics",
            duration: "4 weeks",
            items: ["Kinematics, Laws of Motion", "Work, Energy & Power", "Rotational Motion, Gravitation", "Electrostatics, Current Electricity", "Magnetism & Electromagnetic Induction", "Optics & Modern Physics"],
        },
        {
            title: "Module 2 — Chemistry",
            duration: "4 weeks",
            items: ["Physical Chemistry – Mole concept, Thermodynamics", "Organic Chemistry – Hydrocarbons, Alcohols, Aldehydes", "Inorganic Chemistry – Periodic Table, Chemical Bonding", "Electrochemistry, Solutions, Surface Chemistry"],
        },
        {
            title: "Module 3 — Mathematics",
            duration: "4 weeks",
            items: ["Algebra, Quadratic Equations, Progressions", "Coordinate Geometry, Straight Lines & Circles", "Calculus — Limits, Derivatives, Integrals", "Vector Algebra, 3D Geometry", "Probability, Statistics"],
        },
        {
            title: "Module 4 — Mock Tests & Strategy",
            duration: "2 weeks",
            items: ["50+ Chapter-wise Tests", "Weekly Full-Length JEE Mains Mock Tests", "Previous 10-Year JEE Mains PYQ Practice", "Time Management Techniques"],
        },
    ];

    const projects = [
        { name: "Chapter-wise Practice Tests", desc: "Improve accuracy with topic-based tests and instant solutions." },
        { name: "JEE Mains Mock Tests", desc: "Full-length tests following NTA pattern with rank prediction." },
        { name: "Formula & Concept Revision Sheets", desc: "Special revision sheets for last-minute preparation." },
        { name: "Performance Tracking Dashboard", desc: "AI-based score analysis and weak topic identification." },
    ];

    const reviews = [
        { name: "Rohit Kumar", text: "Physics & Maths teaching is too good. Doubts cleared instantly." },
        { name: "Shravani", text: "Daily tests helped me improve my JEE score drastically." },
        { name: "Harish", text: "Great mentors! They explain concepts clearly and deeply." },
    ];

    const toggle = (i) => setOpenIndex(openIndex === i ? null : i);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <div className="pf-container">
            {/* ================= NAVBAR ================= */}
            <header className="top-header">
                <div className="brand">
                    <div className="logo">J</div>
                    <div className="brand-text">
                        <div className="brand-name">JEE Coaching</div>
                        <div className="brand-tag">Learn. Practice. Succeed.</div>
                    </div>
                </div>

                <div className="hamburger" onClick={toggleMenu}>☰</div>

                <nav className={`nh-nav ${menuOpen ? "active" : ""}`}>
                    <a href="/">Home</a>
                    <a href="#syllabus">Syllabus</a>
                    <a href="#projects">Projects</a>
                    <a href="#reviews">Reviews</a>
                    <a href="#contact">Contact</a>
                </nav>
            </header>

            {/* ================= HERO ================= */}
            <section className="pf-hero">
                <div className="pf-hero-inner">
                    <div className="pf-hero-left">
                        <h1>JEE (Mains) Coaching</h1>
                        <p className="pf-sub">
                            Complete preparation for JEE Mains – Physics, Chemistry & Mathematics with
                            tests, PYQs, strategy sessions, and personal doubt clearing.
                        </p>

                        <div className="pf-cta-row">
                            <a href="https://forms.gle/peNrEn4xtz7Qx1bN6" target="_blank" rel="noopener noreferrer" className="btn-primary full">Enroll Now</a>
                            <a href="#syllabus" className="btn-outline">View Syllabus</a>
                            <a className="btn-tertiary" href="#contact">Contact Us</a>
                        </div>

                        <div className="pf-highlights">
                            <div><strong>Duration:</strong> 3–6 Months</div>
                            <div><strong>Mode:</strong> Online + Offline</div>
                            <div><strong>Mock Tests:</strong> 50+ Included</div>
                        </div>
                    </div>

                    <aside className="pf-aside">
                        <div className="pf-card sticky-card">
                            <div className="price">₹7,999</div>
                            <div className="small">One-time payment (Installments available)</div>
                            <a href="https://forms.gle/peNrEn4xtz7Qx1bN6" target="_blank" rel="noopener noreferrer" className="btn-primary full">Enroll Now</a>
                            <button className="btn-outline full">Download Syllabus</button>
                            <ul className="aside-features">
                                <li>Daily Live Classes</li>
                                <li>Concept Worksheets</li>
                                <li>Mock Tests</li>
                                <li>Personal Mentorship</li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </section>

            {/* ================= WHAT YOU LEARN ================= */}
            <section className="pf-section learn" id="learn">
                <h2>What you'll learn</h2>
                <div className="learn-grid">
                    <div className="learn-item">Concept Mastery in PCM</div>
                    <div className="learn-item">Solve 2000+ MCQs</div>
                    <div className="learn-item">Previous Year Question Analysis</div>
                    <div className="learn-item">Speed Techniques for JEE Mains</div>
                    <div className="learn-item">Time Management & Exam Strategy</div>
                    <div className="learn-item">Full-Length Mock Test Training</div>
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
                <h2>Practice & Mock Tests</h2>
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
