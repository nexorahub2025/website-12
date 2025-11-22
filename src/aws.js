import React, { useState } from "react";
import "./CoursePage.css";

export default function JEE() {
    const [openIndex, setOpenIndex] = useState(null);

    const syllabus = [
        {
            title: "Module 1 — Physics (JEE Mains + Advanced)",
            duration: "4 weeks",
            items: [
                "Kinematics, Newton's Laws, Work & Energy",
                "Rotational Motion, Gravitation, Fluids",
                "Electrostatics, Magnetism, Current Electricity",
                "Optics, Modern Physics, Heat & Thermodynamics",
            ],
        },
        {
            title: "Module 2 — Chemistry (Physical, Organic, Inorganic)",
            duration: "4 weeks",
            items: [
                "Mole Concept, Thermodynamics, Chemical Kinetics",
                "Organic basics, GOC, Hydrocarbons",
                "Periodic Table, Chemical Bonding",
                "Coordination compounds, Electrochemistry",
            ],
        },
        {
            title: "Module 3 — Mathematics (JEE Mains + Advanced)",
            duration: "4 weeks",
            items: [
                "Algebra, Quadratic & Polynomial Equations",
                "Coordinate Geometry: Lines, Circles, Conics",
                "Calculus: Limits, Derivatives, Integration",
                "Vectors, Matrices, Probability",
            ],
        },
        {
            title: "Module 4 — JEE Strategy, Mock Tests & Analysis",
            duration: "2 weeks",
            items: [
                "Exam strategy for Mains + Advanced",
                "Previous year questions discussion",
                "Full-length mock tests",
                "Speed & accuracy improvement techniques",
            ],
        },
    ];

    const projects = [
        {
            name: "100+ Mock Tests Portal",
            desc: "Access topic-wise and full-length JEE mock tests with analytics.",
        },
        {
            name: "Formula Handbook",
            desc: "Physics, Chemistry & Maths quick revision notes for high scoring.",
        },
        {
            name: "Doubt Solving System",
            desc: "Students can ask questions and get solutions in real-time.",
        },
        {
            name: "JEE Rank Predictor",
            desc: "AI-based score vs rank prediction tool.",
        },
    ];

    const reviews = [
        { name: "Rohan", text: "The mock tests and analysis helped me boost my rank." },
        { name: "Ananya", text: "Great teachers and simple explanations for tough concepts." },
        { name: "Vikram", text: "Best course for JEE preparation at affordable price!" },
    ];

    const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

    return (
        <div className="pf-container">
            {/* Hero */}
            <section className="pf-hero">
                <div className="pf-hero-inner">
                    <div className="pf-hero-left">
                        <h1>JEE Coaching — Mains & Advanced</h1>
                        <p className="pf-sub">
                            Master Physics, Chemistry & Mathematics for JEE Mains and Advanced with India's top-level structured preparation.
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
                            <div><strong>Duration:</strong> 12–14 weeks</div>
                            <div><strong>Level:</strong> Beginner → Advanced</div>
                            <div><strong>Students:</strong> 1500+ Enrolled</div>
                        </div>
                    </div>

                    <aside className="pf-aside">
                        <div className="pf-card sticky-card">
                            <div className="price">₹7,999</div>
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
                                <li>Live classes</li>
                                <li>Mock Tests & Analysis</li>
                                <li>Handwritten Notes</li>
                                <li>24x7 Doubt Solving</li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </section>

            {/* Learn */}
            <section className="pf-section learn" id="learn">
                <h2>What you'll learn</h2>
                <div className="learn-grid">
                    <div className="learn-item">Strong foundation in PCM concepts</div>
                    <div className="learn-item">Solve complex JEE-level problems</div>
                    <div className="learn-item">Master time management in exams</div>
                    <div className="learn-item">Attempt full mock tests with analysis</div>
                    <div className="learn-item">Build exam confidence</div>
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
                <h2>Resources & Tools You'll Use</h2>
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
