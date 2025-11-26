import React, { useState } from "react";
import "./CoursePage.css";

export default function SSCExam() {
    const [openIndex, setOpenIndex] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);

    const syllabus = [
        {
            title: "Module 1 — Quantitative Aptitude",
            duration: "4 weeks",
            items: [
                "Number System, Simplification, LCM & HCF",
                "Percentages, Profit & Loss, Simple & Compound Interest",
                "Ratio & Proportion, Time & Work, Time & Distance",
                "Algebra, Geometry, Mensuration, Trigonometry basics",
            ],
        },
        {
            title: "Module 2 — Reasoning Ability",
            duration: "4 weeks",
            items: [
                "Analogy, Coding-Decoding",
                "Blood Relations, Directions",
                "Puzzles, Seating Arrangements",
                "Series, Non-Verbal Reasoning",
            ],
        },
        {
            title: "Module 3 — English Language",
            duration: "3 weeks",
            items: [
                "Grammar, Error Spotting, Fill in the Blanks",
                "Vocabulary, Synonyms & Antonyms",
                "Reading Comprehension",
                "Para Jumbles, Cloze Test",
            ],
        },
        {
            title: "Module 4 — General Awareness",
            duration: "3 weeks",
            items: [
                "History, Geography, Polity",
                "Economics, General Science",
                "Current Affairs (6 months)",
                "Static GK",
            ],
        },
    ];

    const projects = [
        { name: "Daily Speed Test Practice", desc: "Short chapter-wise tests to improve accuracy & speed." },
        { name: "Weekly Mock Tests", desc: "Full-length SSC mock tests with ranks and analysis." },
        { name: "PYQ Analysis Sessions", desc: "10-year SSC CGL, CHSL question paper solving." },
        { name: "Study Planner", desc: "Personalized timetable based on performance." },
    ];

    const reviews = [
        { name: "Rohit", text: "Best institute for SSC with structured guidance." },
        { name: "Sushmitha", text: "Daily tests and mock analysis boosted my confidence." },
        { name: "Aravind", text: "Great faculty and detailed doubt-clearing sessions." },
    ];

    const toggle = (i) => setOpenIndex(openIndex === i ? null : i);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <div className="pf-container">
            {/* ================= NAVBAR ================= */}
            <header className="top-header">
                <div className="brand">
                    <div className="logo">S</div>
                    <div className="brand-text">
                        <div className="brand-name">SSC Exam</div>
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
                        <h1>SSC Exam Coaching (CGL | CHSL | GD | MTS)</h1>
                        <p className="pf-sub">
                            Complete SSC preparation covering Quant, Reasoning, English & GS with mock tests,
                            PYQs and performance-based improvement plan.
                        </p>

                        <div className="pf-cta-row">
                            <a className="btn-primary full" href="https://forms.gle/cJbB8jEknh4DHbsT8" target="_blank" rel="noopener noreferrer">Enroll Now</a>
                            <a href="#syllabus" className="btn-outline">View Syllabus</a>
                            <a className="btn-tertiary" href="#contact">Contact Us</a>
                        </div>

                        <div className="pf-highlights">
                            <div><strong>Duration:</strong> 4–6 months</div>
                            <div><strong>Mode:</strong> Online + Offline</div>
                            <div><strong>Mock Tests:</strong> 40+ Full Tests</div>
                        </div>
                    </div>

                    <aside className="pf-aside">
                        <div className="pf-card sticky-card">
                            <div className="price">₹7,999</div>
                            <div className="small">One-time payment (EMI available)</div>
                            <a className="btn-primary full" href="https://forms.gle/cJbB8jEknh4DHbsT8" target="_blank" rel="noopener noreferrer">Enroll Now</a>
                            <button className="btn-outline full">Download Syllabus</button>
                            <ul className="aside-features">
                                <li>Live Classes</li>
                                <li>Daily Tests</li>
                                <li>Mock Exams</li>
                                <li>Complete Study Material</li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </section>

            {/* ================= WHAT YOU LEARN ================= */}
            <section className="pf-section learn" id="learn">
                <h2>What you'll learn</h2>
                <div className="learn-grid">
                    <div className="learn-item">Quantitative Aptitude from basics to advanced</div>
                    <div className="learn-item">Strong Reasoning skills with tricks</div>
                    <div className="learn-item">Grammar, Vocabulary & Comprehension</div>
                    <div className="learn-item">General Awareness & Current Affairs</div>
                    <div className="learn-item">Time management for SSC exams</div>
                    <div className="learn-item">Mock test strategy & score boosting</div>
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
                <p>Have questions? Call or WhatsApp us — SSC mentors will guide you.</p>
                <div className="contact-row">
                    <a href="mailto:support@nexorahub.com" className="btn-outline">Email Us</a>
                    <a href="tel:+919876543210" className="btn-primary">Call / WhatsApp</a>
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
