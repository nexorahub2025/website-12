import React, { useState } from "react";
import "./CoursePage.css";

export default function NEETCourse() {
    const [openIndex, setOpenIndex] = useState(null);

    const syllabus = [
        {
            title: "Module 1 — Physics (Foundation & Core)",
            duration: "8 weeks",
            items: [
                "Mechanics: Kinematics, Laws of Motion, Work & Energy",
                "Thermodynamics & Oscillations",
                "Electrostatics, Current Electricity, Magnetism",
                "Optics: Ray & Wave Optics, Modern Physics basics",
                "Practice: Numerical problem solving and short-cut techniques",
            ],
        },
        {
            title: "Module 2 — Chemistry (Physical & Organic)",
            duration: "8 weeks",
            items: [
                "Physical Chemistry: Mole concept, Stoichiometry, Chemical Thermodynamics",
                "Inorganic Chemistry: Periodic Table, Chemical Bonding, Coordination Compounds",
                "Organic Chemistry: Basic Concepts, Reaction Mechanisms, Important Named Reactions",
                "Practice: Reaction-based questions, mechanism shortcuts, numerical practice",
            ],
        },
        {
            title: "Module 3 — Biology (Botany & Zoology)",
            duration: "10 weeks",
            items: [
                "Cell Biology, Genetics, Evolution",
                "Human Physiology: Circulatory, Respiratory, Nervous & Endocrine systems",
                "Plant Physiology & Ecology",
                "Diversity of Life, Biotechnology & Important Diagrams",
                "Practice: Long-form and assertion–reason type biology questions",
            ],
        },
        {
            title: "Module 4 — High-impact Revision & PYQ",
            duration: "6 weeks",
            items: [
                "Topic-wise revision of frequently asked concepts",
                "Previous Years' Questions (PYQ) analysis & pattern spotting",
                "Common trick questions & quick recall checklists",
                "Formula sheet, reaction map, important diagrams",
            ],
        },
        {
            title: "Module 5 — Full-length Mocks & Exam Strategy",
            duration: "6 weeks",
            items: [
                "Timed full-length NEET mock tests (CBT style)",
                "Sectional tests for all three subjects",
                "Performance analytics, error analysis and personalized study plan",
                "Time management, question-selection strategy & last-week plan",
            ],
        },
    ];

    const projects = [
        {
            name: "Topic-wise Question Bank (2000+ Qs)",
            desc: "Curated topic-wise practice questions with solutions and difficulty tags.",
        },
        {
            name: "Weekly Mock Series",
            desc: "Weekly full/sectional mock tests with detailed performance reports.",
        },
        {
            name: "PYQ Mastery Workshops",
            desc: "Live sessions solving and analyzing previous 10 years NEET questions.",
        },
        {
            name: "Rapid Revision Flashcards",
            desc: "High-yield flashcards for last-minute revision (formulas, reactions, diagrams).",
        },
    ];

    const reviews = [
        { name: "Aishwarya", text: "Comprehensive coverage and great doubt-clearing sessions." },
        { name: "Rahul", text: "Mock tests and PYQ practice helped me build confidence for NEET." },
        { name: "Neha", text: "Excellent faculty for Biology and great revision strategy." },
    ];

    const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

    return (
        <div className="pf-container">
            {/* Hero */}
            <section className="pf-hero">
                <div className="pf-hero-inner">
                    <div className="pf-hero-left">
                        <h1>NEET Preparation — 6 Month Intensive Program</h1>
                        <p className="pf-sub">
                            Focused 6-month NEET program covering Physics, Chemistry & Biology with PYQ practice,
                            full-length mocks and personalized improvement plan — designed for targetted rank improvement.
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
                            <div><strong>Duration:</strong> 6 months (intensive)</div>
                            <div><strong>Mode:</strong> Live classes + Recorded sessions</div>
                            <div><strong>Students:</strong> Batch size limited for focused attention</div>
                        </div>
                    </div>

                    <aside className="pf-aside">
                        <div className="pf-card sticky-card">
                            <div className="price">₹14,999</div>
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
                                <li>Live Doubt Sessions</li>
                                <li>2000+ Practice Questions</li>
                                <li>Weekly Mocks & Analytics</li>
                                <li>PYQ Masterclasses</li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </section>

            {/* What you'll learn */}
            <section className="pf-section learn" id="learn">
                <h2>What you'll learn</h2>
                <div className="learn-grid">
                    <div className="learn-item">NEET-focused Physics Concepts & Problem Solving</div>
                    <div className="learn-item">Physical, Inorganic & Organic Chemistry Mastery</div>
                    <div className="learn-item">Complete Biology (Botany + Zoology) with Diagrams</div>
                    <div className="learn-item">Exam Strategy, Time Management & PYQ Analysis</div>
                    <div className="learn-item">High-yield Revision & Quick Recall Techniques</div>
                    <div className="learn-item">Performance Tracking & Personalized Improvement Plan</div>
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

            {/* Projects / Practice */}
            <section className="pf-section projects">
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

            {/* Trainers / Faculty */}

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
