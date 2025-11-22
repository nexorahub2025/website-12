import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

/* Syllabus content for each course (sample topics + projects) */
const syllabusData = {
    "Python Stack": {
        topics: [
            "Python Basics: variables, loops, functions",
            "OOP in Python, modules & packages",
            "Web development with Flask/Django (REST APIs)",
            "Databases: SQLite / PostgreSQL",
            "Project: Job Portal (Full Stack) & Web Scraper",
        ],
    },
    "Java Full Stack": {
        topics: [
            "Core Java, OOP concepts",
            "Servlets, JSP, Spring Boot basics",
            "Frontend with HTML/CSS/JS & React",
            "Database & Hibernate / JPA",
            "Project: E-Commerce App with Spring Boot + React",
        ],
    },
    "AWS (Amazon Web Services)": {
        topics: [
            "AWS EC2, S3, IAM fundamentals",
            "RDS, VPC, Load Balancers",
            "Serverless: Lambda, API Gateway",
            "Deployment & CI/CD with CodePipeline",
            "Project: Deploy scalable web app on AWS",
        ],
    },
    "Artificial Intelligence (AI)": {
        topics: [
            "Math foundations: Linear algebra & probability",
            "Neural networks & deep learning basics",
            "CNNs, RNNs, Transformers overview",
            "Model training, optimization, and evaluation",
            "Project: Image classifier / Chatbot",
        ],
    },
    "Data Science": {
        topics: [
            "Python for data analysis: Pandas, NumPy",
            "Data visualization: Matplotlib, Seaborn",
            "Statistical analysis & hypothesis testing",
            "Machine Learning: Regression, Trees, Clustering",
            "Project: End-to-end Data Analysis & ML model",
        ],
    },
    "Aptitude & Reasoning": {
        topics: [
            "Quantitative aptitude: Number systems, algebra",
            "Logical reasoning & puzzles",
            "Speed math & shortcuts",
            "Mock tests & timed practice",
            "Project: Weekly tests & performance analytics",
        ],
    },
    "English Communication": {
        topics: [
            "Grammar basics & spoken English",
            "Pronunciation & fluency drills",
            "Interview communication & group discussion",
            "Business email & report writing",
            "Project: Mock interviews & presentations",
        ],
    },
    "GATE Preparation": {
        topics: [
            "Subject-wise advanced theory & problem solving",
            "Previous year paper analysis",
            "Test series & time-management",
            "Revision strategy & doubt sessions",
            "Project: Subject-wise mini research/problem sets",
        ],
    },
    "TCS NQT": {
        topics: [
            "Aptitude foundations & coding patterns",
            "Verbal ability & reasoning practice",
            "Problem solving for TCS NQT format",
            "Mock tests & result analysis",
            "Project: Prepare NQT-ready coding portfolio",
        ],
    },
    "Infosys Certification (InfyTQ)": {
        topics: [
            "Core programming & data structures",
            "Object-oriented programming projects",
            "Platform specific practice & quizzes",
            "Mock tests aligned to InfyTQ",
            "Project: Mini product & documentation",
        ],
    },
    "Wipro NTH": {
        topics: [
            "Aptitude, coding practice & domain basics",
            "Situational judgment & soft skills",
            "Mock exams with analytics",
            "Project: Timed code challenges",
        ],
    },
    "Bank Exam Preparation": {
        topics: [
            "Quantitative aptitude & reasoning",
            "General awareness & computer basics",
            "Practice papers & mock interviews",
            "Project: Weekly test series & trackers",
        ],
    },
    "SSC Exam Training": {
        topics: [
            "Syllabus mapping & subject-wise coaching",
            "Practice sets & speed improvement",
            "General knowledge & reasoning",
            "Project: Comprehensive revision packs",
        ],
    },
};

export default function Syllabus() {
    const navigate = useNavigate();
    const [open, setOpen] = useState(null);

    const toggle = (key) => setOpen(open === key ? null : key);

    return (
        <div className="syllabus-page">
            <div className="syllabus-header">
                <div className="nh-container">
                    <button className="btn-ghost" onClick={() => navigate(-1)}>← Back</button>
                    <h1>Syllabus & Projects — NexoraHub</h1>
                    <p className="muted">Expand a course to view detailed topics and the projects you'll build.</p>
                </div>
            </div>

            <div className="nh-container syllabus-list">
                {Object.keys(syllabusData).map((course, idx) => (
                    <div className="syllabus-item" key={idx}>
                        <button className={`accordion ${open === idx ? "open" : ""}`} onClick={() => toggle(idx)}>
                            <div>
                                <h3>{course}</h3>
                                <div className="small-muted">Click to view topics & projects</div>
                            </div>
                            <div className="accordion-arrow">{open === idx ? "−" : "+"}</div>
                        </button>

                        {open === idx && (
                            <div className="accordion-body">
                                <ul>
                                    {syllabusData[course].topics.map((t, i) => (
                                        <li key={i}>{t}</li>
                                    ))}
                                </ul>
                                <div className="project-box">
                                    <strong>Sample Project(s):</strong>
                                    <ul>
                                        <li>Mini-project & one capstone per course (hands-on)</li>
                                        <li>Project code + deployment + documentation</li>
                                    </ul>
                                </div>
                                <div className="syllabus-actions">
                                    <button className="btn-primary" onClick={() => alert("Demo: enrollment flow")}>Enroll in {course}</button>
                                    <button className="btn-outline" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Back to top</button>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
