import React from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import Enroll from "./enroll";
import JavaFullStack from "./javafullstack";
import Syllabus from "./Syllabus";
import PythonFullStack from "./PythonFullStack";
import AWS from "./aws";
import AdminEnrollments from "./AdminEnrollments";
/* Newly added course components */
import AI from "./aii";
import DataScience from "./DataScience";
import AptitudeReasoning from "./Aptitude";
import EnglishCommunication from "./English";
import GATE from "./GATE";
import TCS from "./TCS";
import NEET from "./NEET";
import Bank from "./Bank";
import SSC from "./SSC";
import JEE from "./JEE";

/* Dummy data */
const mainCourses = [
  "Python Stack",
  "Java Full Stack",
  "AWS (Amazon Web Services)",
  "Artificial Intelligence (AI)",
  "Data Science",
  "Aptitude & Reasoning",
  "English Communication",
];

const competitiveCourses = [
  "GATE Preparation",
  "TCS NQT",
  "NEET",
  "Bank Exam Preparation",
  "SSC Exam Training",
  "JEE Mains/Advanced",
];

const trainers = [
  { name: "Vamsi ", role: "Apitude and Reasoning", img: "/image/1.jpg  " },
  { name: "Sowmika ", role: "Python Trainer", img: "/image/3.jpg  " },
  { name: "Purnasrinivas ", role: "AI Trainer", img: "/image/2.jpg  " },
];

const reviews = [
  { name: "Ravi Kumar", text: "NexoraHub's Python course helped me land my first data job!" },
  { name: "Ramu", text: "Great trainers and practical projects. Highly recommended." },
  { name: "Ammu ", text: "The live tests and doubt sessions were game changers." },
  { name: "josh", text: "Clear explanations and very supportive instructors." },
];

function Home() {
  const navigate = useNavigate();

  const trainerSettings = {
    dots: false,
    infinite: true,
    speed: 9000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  const reviewSettings = {
    dots: false,
    infinite: true,
    speed: 7000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
  };

  return (
    <>
      <header className="nh-header">
        <div className="nh-container header-inner">
          <div className="brand">
            <div className="logo">N</div>
            <div className="brand-text">
              <div className="brand-name">NexoraHub</div>
              <div className="brand-tag">Learn. Grow. Excel.</div>
            </div>
          </div>

          <nav className="nh-nav">
            <a href="#home" onClick={(e) => { e.preventDefault(); document.querySelector("#home").scrollIntoView({ behavior: "smooth" }); }}>Home</a>
            <a href="#courses" onClick={(e) => { e.preventDefault(); document.querySelector("#courses").scrollIntoView({ behavior: "smooth" }); }}>Courses</a>
            <a href="#trainers" onClick={(e) => { e.preventDefault(); document.querySelector("#trainers").scrollIntoView({ behavior: "smooth" }); }}>Trainers</a>
            <a href="#reviews" onClick={(e) => { e.preventDefault(); document.querySelector("#reviews").scrollIntoView({ behavior: "smooth" }); }}>Reviews</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector("#contact").scrollIntoView({ behavior: "smooth" }); }}>Contact</a>
          </nav>

          <div className="header-cta">
            <a
              href="https://forms.gle/peNrEn4xtz7Qx1bN6"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary full"
            >
              Enroll Now
            </a>          </div>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section id="home" className="nh-hero">
          <div className="nh-container hero-inner">
            <div className="hero-left">
              <h1>Empowering Learning with <span className="accent">NexoraHub</span></h1>
              <p className="lead">Hands-on courses, expert trainers, and project-based learning — everything to make you job-ready.</p>
              <div className="hero-actions">
                <button className="btn-primary" onClick={() => navigate("/syllabus")}>Enroll Now</button>
                <button className="btn-ghost" onClick={() => document.querySelector("#courses").scrollIntoView({ behavior: "smooth" })}>Learn More</button>
              </div>
            </div>
            <div className="hero-right">
              <div className="hero-card">
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop" alt="students learning" />
              </div>
            </div>
          </div>
        </section>

        {/* MISSION & VISION */}
        <section className="nh-mission">
          <div className="nh-container mission-grid">
            <div className="mission-card">
              <h3>Our Mission</h3>
              <p>To bridge education and employability by delivering high-quality, practical training.</p>
            </div>
            <div className="mission-card">
              <h3>Our Vision</h3>
              <p>To be the most trusted learning hub for career-focused learners.</p>
            </div>
          </div>
        </section>

        {/* COURSES */}
        <section id="courses" className="nh-courses">
          <div className="nh-container">
            <h2 className="section-title">Main Courses (Tech + Skill Programs)</h2>
            <div className="courses-grid">
              {mainCourses.map((c, idx) => (
                <div className="course-card" key={idx}>
                  <h4>{c}</h4>
                  <p className="course-mini">Comprehensive curriculum with projects & certification.</p>

                  <div className="course-actions">
                    {c === "Python Stack" && (
                      <>
                        <Link to="/python" className="btn-sm">Syllabus</Link>
                        <Link to="https://forms.gle/peNrEn4xtz7Qx1bN6" className="btn-outline">Enroll</Link>
                      </>
                    )}

                    {c === "Java Full Stack" && (
                      <>
                        <Link to="/java" className="btn-sm">Syllabus</Link>
                        <Link to="https://forms.gle/peNrEn4xtz7Qx1bN6" className="btn-outline">Enroll</Link>
                      </>
                    )}

                    {c === "AWS (Amazon Web Services)" && (
                      <>
                        <Link to="/aws" className="btn-sm">Syllabus</Link>
                        <Link to="https://forms.gle/peNrEn4xtz7Qx1bN6" className="btn-outline">Enroll</Link>
                      </>
                    )}

                    {c === "Artificial Intelligence (AI)" && (
                      <>
                        <Link to="/ai" className="btn-sm">Syllabus</Link>
                        <Link to="https://forms.gle/peNrEn4xtz7Qx1bN6" className="btn-outline">Enroll</Link>
                      </>
                    )}

                    {c === "Data Science" && (
                      <>
                        <Link to="/datascience" className="btn-sm">Syllabus</Link>
                        <Link to="https://forms.gle/peNrEn4xtz7Qx1bN6" className="btn-outline">Enroll</Link>
                      </>
                    )}

                    {c === "Aptitude & Reasoning" && (
                      <>
                        <Link to="/aptitude" className="btn-sm">Syllabus</Link>
                        <Link to="https://forms.gle/peNrEn4xtz7Qx1bN6" className="btn-outline">Enroll</Link>
                      </>
                    )}

                    {c === "English Communication" && (
                      <>
                        <Link to="/english" className="btn-sm">Syllabus</Link>
                        <Link to="https://forms.gle/peNrEn4xtz7Qx1bN6" className="btn-outline">Enroll</Link>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <h2 className="section-title" style={{ marginTop: 36 }}>Competitive Exam Programs</h2>
            <div className="courses-grid">
              {competitiveCourses.map((c, idx) => (
                <div className="course-card" key={idx}>
                  <h4>{c}</h4>
                  <p className="course-mini">Focused training & mock tests to boost scores.</p>

                  <div className="course-actions">
                    {c === "GATE Preparation" && (
                      <>
                        <Link to="/gate" className="btn-sm">Syllabus</Link>
                        <Link to="https://forms.gle/peNrEn4xtz7Qx1bN6" className="btn-outline">Enroll</Link>
                      </>
                    )}

                    {c === "TCS NQT" && (
                      <>
                        <Link to="/tcs" className="btn-sm">Syllabus</Link>
                        <Link to="https://forms.gle/peNrEn4xtz7Qx1bN6" className="btn-outline">Enroll</Link>
                      </>
                    )}

                    {c === "NEET" && (
                      <>
                        <Link to="/neet" className="btn-sm">Syllabus</Link>
                        <Link to="https://forms.gle/peNrEn4xtz7Qx1bN6" className="btn-outline">Enroll</Link>
                      </>
                    )}

                    {c === "Bank Exam Preparation" && (
                      <>
                        <Link to="/bank" className="btn-sm">Syllabus</Link>
                        <Link to="https://forms.gle/peNrEn4xtz7Qx1bN6" className="btn-outline">Enroll</Link>
                      </>
                    )}

                    {c === "SSC Exam Training" && (
                      <>
                        <Link to="/ssc" className="btn-sm">Syllabus</Link>
                        <Link to="https://forms.gle/peNrEn4xtz7Qx1bN6" className="btn-outline">Enroll</Link>
                      </>
                    )}

                    {c === "JEE Mains/Advanced" && (
                      <>
                        <Link to="/jee" className="btn-sm">Syllabus</Link>
                        <Link to="https://forms.gle/peNrEn4xtz7Qx1bN6" className="btn-outline">Enroll</Link>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TRAINERS */}
        <section id="trainers" className="nh-trainers">
          <div className="nh-container">
            <h2 className="section-title">Top Trainers</h2>
            <Slider {...trainerSettings} className="trainers-slider">
              {trainers.map((t, i) => (
                <div key={i} className="trainer-card">
                  <img src={t.img} alt={t.name} />
                  <h4>{t.name}</h4>
                  <p className="muted">{t.role}</p>
                </div>
              ))}
            </Slider>
          </div>
        </section>

        {/* REVIEWS */}
        <section id="reviews" className="nh-reviews">
          <div className="nh-container">
            <h2 className="section-title">Student Reviews</h2>
            <Slider {...reviewSettings} className="reviews-slider">
              {reviews.map((r, i) => (
                <div className="review-card" key={i}>
                  <p className="quote">“{r.text}”</p>
                  <p className="author">— {r.name}</p>
                </div>
              ))}
            </Slider>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="nh-contact">
          <div className="nh-container contact-inner">
            <div className="contact-card-large">
              <h3>Get in touch</h3>
              <p>Address: Kovvur Road, Sita Nagar, Jaggampeta, Kakinada 533002</p>
              <p>Email: support@nexorahub2025@gmail.com | Phone: +91 7286842779</p>
            </div>

            <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert("Demo: message sent"); e.target.reset(); }}>
              <input name="name" placeholder="Your name" required />
              <input name="email" placeholder="Your email" required />
              <textarea name="message" placeholder="Message" rows="4" />
              <div className="form-actions">
                <button className="btn-primary" type="submit">Send Message</button>
                <button type="reset" className="btn-ghost">Reset</button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="nh-footer">
        <div className="nh-container footer-inner">
          <div>© {new Date().getFullYear()} NexoraHub — All rights reserved.</div>
          <div className="footer-links">
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
          </div>
        </div>
      </footer>
    </>
  );
}

/* ROUTES CONFIGURATION */
export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Tech Courses */}
        <Route path="/python" element={<PythonFullStack />} />
        <Route path="/java" element={<JavaFullStack />} />
        <Route path="/aws" element={<AWS />} />
        <Route path="/ai" element={<AI />} />
        <Route path="/datascience" element={<DataScience />} />
        <Route path="/aptitude" element={<AptitudeReasoning />} />
        <Route path="/english" element={<EnglishCommunication />} />

        {/* Competitive Exams */}
        <Route path="/gate" element={<GATE />} />
        <Route path="/tcs" element={<TCS />} />
        <Route path="/neet" element={<NEET />} />
        <Route path="/bank" element={<Bank />} />
        <Route path="/ssc" element={<SSC />} />
        <Route path="/jee" element={<JEE />} />
        <Route path="/enroll" element={<Enroll />} />

        <Route path="/syllabus" element={<Syllabus />} />
        <Route path="/admin/enrollments" element={<AdminEnrollments />} />
      </Routes>
    </BrowserRouter>
  );
}
