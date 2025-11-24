import React, { useState } from "react";
import "./CoursePage.css";

export default function AWS() {
    const [openIndex, setOpenIndex] = useState(null);

    const syllabus = [
        {
            title: "Module 1 — AWS Cloud Basics",
            duration: "2 weeks",
            items: [
                "Introduction to Cloud Computing",
                "AWS Global Infrastructure & Regions",
                "IAM Users, Groups, Roles, Policies",
                "EC2, S3, VPC Overview",
            ],
        },
        {
            title: "Module 2 — AWS Compute, Storage & Networking",
            duration: "3 weeks",
            items: [
                "Launching & Managing EC2 Instances",
                "EBS, EFS, S3 Deep Concepts",
                "VPC, Subnets, Route Tables, Internet Gateway",
                "Load Balancer & Auto Scaling",
            ],
        },
        {
            title: "Module 3 — Databases & Security",
            duration: "2 weeks",
            items: [
                "RDS, DynamoDB, Aurora",
                "AWS KMS, Shield, WAF",
                "CloudWatch, CloudTrail, SNS, SQS",
                "Backup, Monitoring & Logging",
            ],
        },
        {
            title: "Module 4 — AWS DevOps Essentials",
            duration: "3 weeks",
            items: [
                "CI/CD using CodeCommit, CodeBuild, CodeDeploy",
                "Serverless — Lambda, API Gateway",
                "Docker & ECS/ECR",
                "Deploying a Full Application",
            ],
        },
        {
            title: "Module 5 — Exam Strategy & Hands-On Projects",
            duration: "2 weeks",
            items: [
                "AWS Cloud Practitioner Exam Strategy",
                "AWS Solutions Architect Associate Tips",
                "Full Practice Tests",
                "Real-World AWS Deployments",
            ],
        },
    ];

    const projects = [
        {
            name: "AWS EC2 Deployment Project",
            desc: "Deploy a real application using EC2, Security Groups & Load Balancer.",
        },
        {
            name: "S3 + CloudFront Hosting",
            desc: "Host a static website with global delivery using S3 & CloudFront.",
        },
        {
            name: "Serverless Application",
            desc: "Build API using Lambda + API Gateway + DynamoDB.",
        },
        {
            name: "CI/CD Automation",
            desc: "Implement CI/CD pipeline using CodePipeline & CodeDeploy.",
        },
    ];

    const reviews = [
        { name: "Arjun", text: "Best AWS course with real hands-on projects!" },
        { name: "Sneha", text: "Helped me crack AWS Cloud Practitioner easily." },
        { name: "Mahesh", text: "Great explanations and practical exercises." },
    ];

    const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

    return (
        <div className="pf-container">
            {/* Hero */}
            <section className="pf-hero">
                <div className="pf-hero-inner">
                    <div className="pf-hero-left">
                        <h1>AWS Cloud & DevOps Training</h1>
                        <p className="pf-sub">
                            Master AWS Cloud Practitioner + Solutions Architect + DevOps Essentials with real hands-on projects.
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
                            <div><strong>Duration:</strong> 12 weeks</div>
                            <div><strong>Level:</strong> Beginner → Advanced</div>
                            <div><strong>Students:</strong> 2000+ Trained</div>
                        </div>
                    </div>

                    <aside className="pf-aside">
                        <div className="pf-card sticky-card">
                            <div className="price">₹8,499</div>
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
                                <li>Hands-on AWS Labs</li>
                                <li>Certification Guidance</li>
                                <li>24x7 Doubt Support</li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </section>

            {/* Learn */}
            <section className="pf-section learn" id="learn">
                <h2>What you'll learn</h2>
                <div className="learn-grid">
                    <div className="learn-item">AWS Cloud Foundations</div>
                    <div className="learn-item">Deploy apps using EC2, S3, VPC</div>
                    <div className="learn-item">Hands-on DevOps tools</div>
                    <div className="learn-item">Serverless & CI/CD</div>
                    <div className="learn-item">Clear AWS Certification Exams</div>
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
                <h2>Hands-On AWS Projects</h2>
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
