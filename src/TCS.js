import React, { useState } from "react";
import "./CoursePage.css";

export default function TCSNQT() {
    const [openIndex, setOpenIndex] = useState(null);

    const syllabus = [
        {
            title: "Module 1 — Numerical Ability",
            duration: "3 weeks",
            items: [
                "Number System, LCM & HCF",
                "Percentages, Profit & Loss, Simple & Compound Interest",
                "Time & Work, Time & Distance",
                "Permutation & Combination, Probability",
            ],
        },
        {
            title: "Module 2 — Verbal Ability",
            duration: "3 weeks",
            items: [
                "Reading Comprehension",
                "Sentence Completion & Para Jumbles",
                "Error Spotting & Grammar Rules",
                "Vocabulary Building",
            ],
        },
        {
            title: "Module 3 — Reasoning Ability",
            duration: "3 weeks",
            items: [
                "Puzzles & Seating Arrangement",
                "Coding–Decoding",
                "Blood Relations",
                "Series & Patterns",
                "Data Interpretation & Analysis",
            ],
        },
        {
            title: "Module 4 — Programming Logic",
            duration: "4 weeks",
            items: [
                "Basic Coding Concepts",
                "Loops, Arrays, Strings",
                "Functions & Recursion",
                "Debugging & Error Finding",
            ],
        },
        {
            title: "Module 5 — Hands-on Coding (Python/Java/C)",
            duration: "3 weeks",
            items: [
                "Coding Questions asked in TCS NQT",
                "Optimization and test case handling",
                "Mock Coding Rounds",
            ],
        },
    ];

    const projects = [
        {
            name: "Aptitude Question Bank Generator",
            desc: "Build a tool to generate topic-wise TCS NQT level aptitude questions.",
        },
        {
            name: "Mock Test Simulator",
            desc: "Create a full mock TCS NQT exam platform with timer & scoring logic.",
        },
        {
            name: "Mini Coding Problems",
            desc: "Solve 50+ coding problems commonly asked in TCS hiring tests.",
        },
        {
            name: "Resume Portfolio Project",
            desc: "Build a clean portfolio for TCS recruitment profile.",
        },
    ];

    const reviews = [
        { name: "Manoj", text: "I cleared TCS NQT on first attempt! Very useful coaching." },
        { name: "Lakshmi", text: "Mock tests improved my speed and accuracy a lot." },
        { name: "Vishal", text: "Best structured preparation for TCS NQT." },
    ];

    const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

    return (
        <div className="pf-container">

            {/* Hero Section */}
            <section className="pf-hero">
                <div className="pf-hero-inner">
                    <div className="pf-hero-left">
                        <h1>TCS NQT Preparation Course</h1>
                        <p className="pf-sub">
                            Master Aptitude, Reasoning, Verbal, Programming Logic, and Coding to crack TCS NQT with confidence.
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
                            <div><strong>Duration:</strong> 10–12 weeks</div>
                            <div><strong>Level:</strong> Beginner to Advanced</div>
                            <div><strong>Students:</strong> 1200+ Trained</div>
                        </div>
                    </div>

                    <aside className="pf-aside">
                        <div className="pf-card sticky-card">
                            <div className="price">₹4,999</div>
                            <div className="small">One-time payment (EMI also available)</div>
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
                                <li>Coding Practice</li>
                                <li>Interview Preparation</li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </section>

            {/* What You'll Learn */}
            <section className="pf-section learn" id="learn">
                <h2>What you'll learn</h2>
                <div className="learn-grid">
                    <div className="learn-item">Aptitude Mastery</div>
                    <div className="learn-item">Reasoning Skills</div>
                    <div className="learn-item">Verbal Ability Improvement</div>
                    <div className="learn-item">Programming Logic</div>
                    <div className="learn-item">Hands-on Coding</div>
                    <div className="learn-item">Full Mock Tests</div>
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
                <h2>Practice & Projects</h2>
                <div className="projects-grid">
                    {projects.map((p, idx) => (
                        <div className="project-card" key={idx}>
                            <div className="project-title">{p.name}</div>
                            <div className="project-desc">{p.desc}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Instructors */}

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

            {/* Contact Section */}
            <section className="pf-section contact" id="contact">
                <h2>Contact / Enroll</h2>
                <p>Have questions? Call or WhatsApp us — we're here to help!</p>
                <div className="contact-row">
                    <a href="mailto:nexorahub2025@gmail.com" className="btn-outline">Email Us</a>
                    <a href="tel:+91 7286842779" className="btn-primary">Call / WhatsApp</a>
                </div>
            </section>

            <footer className="pf-footer">
                © {new Date().get(Date.now())} NexoraHub — All rights reserved.
            </footer>
        </div>
    );
}
