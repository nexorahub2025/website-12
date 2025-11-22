import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function Enroll() {

    const query = new URLSearchParams(useLocation().search);
    const selectedCourse = query.get("course");

    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        course: selectedCourse,
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const submitForm = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:5000/api/enroll", form);
        alert("Your enrollment was submitted successfully!");
    };

    return (
        <div className="enroll-page">
            <h1>Enroll for: {selectedCourse}</h1>

            <form onSubmit={submitForm}>
                <input name="name" placeholder="Your Name" required onChange={handleChange} />
                <input name="phone" placeholder="Phone Number" required onChange={handleChange} />
                <input name="email" placeholder="Email" required onChange={handleChange} />

                <button className="btn-primary" type="submit">Submit</button>
            </form>
        </div>
    );
}
