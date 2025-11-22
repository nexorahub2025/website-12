// src/Enroll.js
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Enroll() {
    const query = new URLSearchParams(useLocation().search);
    const course = query.get("course") || "Unknown Course";
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = { name, phone, email, course, createdAt: new Date() };

        try {
            const res = await fetch("http://localhost:5000/api/enroll", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
            if (!res.ok) throw new Error("Submit failed");
            alert("Enrollment submitted!");
            navigate("/thankyou"); // optional
        } catch (err) {
            alert("Error submitting. See console.");
            console.error(err);
        }
    };

    return (
        <div className="enroll-page">
            <h1>Enroll — {course}</h1>
            <form onSubmit={handleSubmit} className="enroll-form">
                <input value={name} onChange={e => setName(e.target.value)} placeholder="Full name" required />
                <input value={phone} onChange={e => setPhone(e.target.value)} placeholder="Phone" required />
                <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" type="email" required />
                <button type="submit" className="btn-primary full">Submit</button>
            </form>
        </div>
    );
}
