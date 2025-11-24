import React, { useState } from "react";
import "./CoursePage.css";

export default function EnglishCommunication() {
    const [openIndex, setOpenIndex] = useState(null);

    const syllabus = [
        {
            title: "Module 1 — Basic English Grammar",
            duration: "2 weeks",
            items: [
                "Parts of speech, tenses, sentence structure",
                "Common grammatical mistakes",
                "Active & passive voice, direct & indirect speech",
            ],
        },
        {
            title: "Module 2 — Spoken English & Fluency",
            duration: "3 weeks",
            items: [
                "Pronunciation, accent training",
                "Daily conversation practice",
                "Public speaking, group discussions",
                "Confidence building techniques",
            ],
        },
        {
            title: "Module 3 — Professional Communication",
            duration: "2 weeks",
            items: [
                "Email writing, corporate communication",
                "Presentation skills",
                "Interview communication & HR questions",
            ],
        },
        {
            title: "Module 4 — Writing & Vocabulary Building",
            duration: "2 weeks",
            items: [
                "Essay & paragraph writing",
                "Vocabulary improvement techniques",
                "Creative writing basics",
            ],
        },
    ];

    const projects = [
        {
            name: "Interview Practice Module",
            desc: "Mock HR interview questions with spoken responses.",
        },
        {
            name: "Email Writing Task",
            desc: "Write professional emails, reports & proposals.",
        },
        {
            name: "Public Speaking Recording",
            desc: "Record & submit a 3-minute speech for evaluation.",
        },
        {
            name: "Conversation Practice Workbook",
            desc: "Daily real-life English conversation practice tasks.",
        },
    ];

    const reviews = [
        { name: "Aarav", text: "My speaking confidence improved a lot. Amazing course!" },
        { name: "Sneha", text: "Grammar and fluency modules were easy to understand." },
        { name: "Mahesh", text: "Great for interview preparation and communication." },
    ];

    const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

    return (
        <div className="pf-container">
            {/* Hero */}
            <section className="pf-hero">
                <div className="pf-hero-inner">
                    <div className="pf-hero-left">
                        <h1>English Communication Skills</h1>
                        <p className="pf-sub">
                            Improve grammar, fluency, writing & interview communication through structured lessons, practice tasks & feedback.
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
                            <div><strong>Duration:</strong> 6–8 weeks</div>
                            <div><strong>Level:</strong> Beginner → Advanced</div>
                            <div><strong>Students:</strong> 1200+ Enrolled</div>
                        </div>
                    </div>

                    <aside className="pf-aside">
                        <div className="pf-card sticky-card">
                            <div className="price">₹4,999</div>
                            <div className="small">One-time payment</div>
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
                                <li>Live speaking sessions</li>
                                <li>Assignments & Speaking Practice</li>
                                <li>Certificate</li>
                                <li>Interview Preparation</li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </section>

            {/* Learn */}
            <section className="pf-section learn" id="learn">
                <h2>What you'll learn</h2>
                <div className="learn-grid">
                    <div className="learn-item">Speak confidently in English</div>
                    <div className="learn-item">Improve grammar & vocabulary</div>
                    <div className="learn-item">Write professional emails</div>
                    <div className="learn-item">Prepare for interviews</div>
                    <div className="learn-item">Improve pronunciation & fluency</div>
                    <div className="learn-item">Develop public speaking skills</div>
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
                <h2>Practical Projects You'll Do</h2>
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
