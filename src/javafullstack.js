import React, { useState } from "react";
import "./CoursePage.css";

export default function JavaFullStack() {
    const [openIndex, setOpenIndex] = useState(null);

    const syllabus = [
        {
            title: "Module 1 — Core Java Programming",
            duration: "3 weeks",
            items: [
                "Java syntax, OOP principles, classes & objects",
                "Inheritance, polymorphism, abstraction, interfaces",
                "Exception handling, collections framework, generics",
            ],
        },
        {
            title: "Module 2 — Backend with Spring Boot",
            duration: "4 weeks",
            items: [
                "Spring Boot project setup, REST API development",
                "Dependency Injection, JPA & Hibernate ORM",
                "MySQL integration, CRUD operations, validation",
                "Security: JWT Auth, role-based access",
            ],
        },
        {
            title: "Module 3 — Frontend with React",
            duration: "3 weeks",
            items: [
                "Modern HTML, CSS, responsive UI",
                "React components, hooks, props & state",
                "Integration with Java Spring Boot APIs",
            ],
        },
        {
            title: "Module 4 — DevOps, CI/CD & Deployment",
            duration: "2 weeks",
            items: [
                "Git, GitHub, branching workflows",
                "Docker basics, container deployment",
                "Deploy Java + React full stack app to AWS / Render",
            ],
        },
    ];

    const projects = [
        {
            name: "Employee Management System",
            desc: "Admin login, employee CRUD, role-based access, MySQL integration.",
        },
        {
            name: "Online Course Selling Platform",
            desc: "User login, course videos, payment flow demo, admin dashboard.",
        },
        {
            name: "Hospital Appointment System",
            desc: "Doctor/patient login, appointment booking, report uploads.",
        },
        {
            name: "E-Commerce Full Stack App",
            desc: "Product catalog, cart, orders, backend admin CMS.",
        },
    ];

    const reviews = [
        { name: "Karthik R", text: "Best Java Full Stack course with real backend projects." },
        { name: "Harshita", text: "Spring Boot and React integration was taught clearly." },
        { name: "Deepak", text: "Placement guidance was very useful. Recommended!" },
    ];

    const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

    return (
        <div className="pf-container">
            {/* Hero */}
            <section className="pf-hero">
                <div className="pf-hero-inner">
                    <div className="pf-hero-left">
                        <h1>Java Full Stack Development</h1>
                        <p className="pf-sub">
                            Master Java, Spring Boot, React, MySQL & Deployment — Become an industry-ready
                            Java Full Stack Developer with real-time projects.
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
                            <div><strong>Students:</strong> 800+ Enrolled</div>
                        </div>
                    </div>

                    <aside className="pf-aside">
                        <div className="pf-card sticky-card">
                            <div className="price">₹8,999</div>
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
                                <li>Live classes</li>
                                <li>Hands-on Projects</li>
                                <li>Certificate</li>
                                <li>Placement Guidance</li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </section>

            {/* What you'll learn */}
            <section className="pf-section learn" id="learn">
                <h2>What you'll learn</h2>
                <div className="learn-grid">
                    <div className="learn-item">Strong command on Core Java</div>
                    <div className="learn-item">Develop REST APIs using Spring Boot</div>
                    <div className="learn-item">Work with MySQL & Hibernate ORM</div>
                    <div className="learn-item">Build React-based frontend UI</div>
                    <div className="learn-item">Integrate frontend with backend APIs</div>
                    <div className="learn-item">Deploy full stack apps to cloud</div>
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
                <h2>Real Projects You'll Build</h2>
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
            /
            */
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
