import React, { useState } from "react";
import "./CoursePage.css";

export default function AICourse() {
    const [openIndex, setOpenIndex] = useState(null);

    const syllabus = [
        {
            title: "Module 1 — Python & Math for AI",
            duration: "3 weeks",
            items: [
                "Python basics, NumPy, Pandas, Matplotlib",
                "Linear Algebra, Calculus, Probability basics",
                "Data preprocessing & visualization",
            ],
        },
        {
            title: "Module 2 — Machine Learning",
            duration: "4 weeks",
            items: [
                "Supervised & Unsupervised ML",
                "Regression, Classification, Clustering models",
                "Model evaluation, tuning & feature engineering",
                "End-to-end ML project pipeline",
            ],
        },
        {
            title: "Module 3 — Deep Learning",
            duration: "4 weeks",
            items: [
                "Neural Networks, Activation functions",
                "TensorFlow & Keras models",
                "CNNs for image processing",
                "RNN/LSTM for text & sequences",
            ],
        },
        {
            title: "Module 4 — Generative AI & Deployment",
            duration: "2 weeks",
            items: [
                "LLMs, ChatGPT API fundamentals",
                "Building AI chatbots & assistants",
                "Model deployment using AWS, Render, or Streamlit",
                "Version control & GitHub workflows",
            ],
        },
    ];

    const projects = [
        {
            name: "AI Chatbot using LLMs",
            desc: "Build your own ChatGPT-style chatbot using APIs or fine-tuned LLMs.",
        },
        {
            name: "Movie Recommendation System",
            desc: "Collaborative filtering, ML models, deployment with UI.",
        },
        {
            name: "Image Classification System",
            desc: "Deep learning model trained using CNNs for object detection.",
        },
        {
            name: "Customer Churn Prediction",
            desc: "Machine learning pipeline with real-world datasets and dashboards.",
        },
    ];

    const reviews = [
        { name: "Vivek", text: "Amazing hands-on AI training with real ML & DL projects." },
        { name: "Sravani", text: "Generative AI module was fantastic. Very easy to understand." },
        { name: "Rohit", text: "Great practical exposure! Perfect for beginners to advanced learners." },
    ];

    const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

    return (
        <div className="pf-container">
            {/* Hero */}
            <section className="pf-hero">
                <div className="pf-hero-inner">
                    <div className="pf-hero-left">
                        <h1>Artificial Intelligence (AI) & Machine Learning</h1>
                        <p className="pf-sub">
                            Learn Python, Machine Learning, Deep Learning, Neural Networks, Generative AI
                            and build real-world AI applications from scratch.
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
                            <div><strong>Students:</strong> 1200+ Enrolled</div>
                        </div>
                    </div>

                    <aside className="pf-aside">
                        <div className="pf-card sticky-card">
                            <div className="price">₹9,999</div>
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
                                <li>ML & DL Projects</li>
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
                    <div className="learn-item">Machine Learning Algorithms</div>
                    <div className="learn-item">Deep Learning & Neural Networks</div>
                    <div className="learn-item">Python for AI</div>
                    <div className="learn-item">TensorFlow & Keras</div>
                    <div className="learn-item">Generative AI & Chatbot Development</div>
                    <div className="learn-item">Deploying AI Models to Cloud</div>
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
        </div >
    );
}
