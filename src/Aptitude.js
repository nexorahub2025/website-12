import React, { useState } from "react";
import "./CoursePage.css";

export default function AptitudeReasoning() {
    const [openIndex, setOpenIndex] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);

    const syllabus = [
        {
            title: "Module 1 — Quantitative Aptitude",
            duration: "4 weeks",
            items: [
                "Number System, LCM & HCF, Fractions & Decimals",
                "Percentages, Profit & Loss, Simple & Compound Interest",
                "Ratio & Proportion, Averages, Time & Work",
                "Time-Speed-Distance, Boats & Streams, Pipes & Cisterns",
                "Permutation-Combinations, Probability",
            ],
        },
        {
            title: "Module 2 — Logical Reasoning",
            duration: "4 weeks",
            items: [
                "Blood Relations, Coding-Decoding",
                "Puzzle Solving, Seating Arrangements",
                "Syllogism, Statements & Arguments",
                "Analogy, Classification, Ranking & Ordering",
                "Cause & Effect, Course of Action, Critical Reasoning",
            ],
        },
        {
            title: "Module 3 — Verbal & Non-Verbal Reasoning",
            duration: "3 weeks",
            items: [
                "Figure Series, Pattern Observation",
                "Mirror/Water Images, Embedded Figures",
                "Data Sufficiency, Venn Diagrams",
                "Direction Sense Test, Calendar & Clock Problems",
            ],
        },
        {
            title: "Module 4 — Data Interpretation",
            duration: "2 weeks",
            items: [
                "Tables, Line Graphs, Bar Graphs, Pie Charts",
                "Caselets, Missing DI, Mixed Graphs",
                "Speed Calculation Techniques for DI",
                "DI for Banking & SSC Level",
            ],
        },
    ];

    const projects = [
        { name: "Aptitude Mega Practice Set (300+ Questions)", desc: "Full coverage of Quant, Reasoning & Data Interpretation." },
        { name: "Banking & SSC Reasoning Booster", desc: "High-level puzzles, seating, coding-decoding sets." },
        { name: "TCS NQT & GATE Aptitude Pack", desc: "Previous year and expected question practice." },
        { name: "Daily Mock Test Series", desc: "Timed quizzes with leaderboard and progress tracking." },
    ];

    const reviews = [
        { name: "Sanjana", text: "Tricks for Quant were amazing. Helped me clear my SSC exam." },
        { name: "Mahesh", text: "Reasoning classes were very easy to understand. Best faculty!" },
        { name: "Venu", text: "Mock tests improved my time management. Highly recommended!" },
    ];

    const toggle = (i) => setOpenIndex(openIndex === i ? null : i);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <div className="pf-container">

            {/* ================= HEADER (Same as Python Full Stack) ================= */}
            <header className="top-header">
                <div className="brand">
                    <div className="logo">A</div>
                    <div className="brand-text">
                        <div className="brand-name">Aptitude & Reasoning</div>
                        <div className="brand-tag">Master Every Concept</div>
                    </div>
                </div>

                <div className="hamburger" onClick={toggleMenu}>☰</div>

                <nav className={`nh-nav ${menuOpen ? "active" : ""}`}>
                    <a href="/">Home</a>
                    <a href="/#about">About</a>
                    <a href="/#courses">Courses</a>
                    <a href="/#bootcamp">Bootcamp</a>
                    <a href="/#contact">Contact Us</a>
                </nav>
            </header>

            {/* ================= HERO ================= */}
            <section className="pf-hero">
                <div className="pf-hero-inner">
                    <div className="pf-hero-left">
                        <h1>Aptitude & Reasoning Mastery Program</h1>
                        <p className="pf-sub">
                            Crack SSC, Banking, RRB, TCS, Campus Placements, GATE Aptitude and more with
                            complete Quantitative Aptitude, Logical Reasoning and Data Interpretation training.
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
                            <div><strong>Students:</strong> 2+ Enrolled</div>
                        </div>
                    </div>

                    {/* Price Card */}
                    <aside className="pf-aside">
                        <div className="pf-card sticky-card">
                            <div className="price">₹2,999</div>
                            <div className="small">One-time payment (EMI available)</div>
                            <a href="https://forms.gle/peNrEn4xtz7Qx1bN6" target="_blank" rel="noopener noreferrer" className="btn-primary full">
                                Enroll Now
                            </a>
                            <button className="btn-outline full">Download Syllabus</button>
                            <ul className="aside-features">
                                <li>Live Classes</li>
                                <li>500+ Practice Questions</li>
                                <li>Mock Tests</li>
                                <li>Placement & Exam Guidance</li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </section>

            {/* What You'll Learn */}
            <section className="pf-section learn" id="learn">
                <h2>What you'll learn</h2>
                <div className="learn-grid">
                    <div className="learn-item">Quantitative Aptitude from Basics to Advanced</div>
                    <div className="learn-item">Logical & Analytical Reasoning</div>
                    <div className="learn-item">Verbal & Non-Verbal Reasoning</div>
                    <div className="learn-item">Data Interpretation Mastery</div>
                    <div className="learn-item">Shortcut Tricks & Time-Saving Methods</div>
                    <div className="learn-item">Preparation for SSC, Banking, TCS, RRB, GATE</div>
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

            {/* Projects */}
            <section className="pf-section projects">
                <h2>Practice Sets & Mock Tests</h2>
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
