import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

export default function AdminEnrollments() {
    const [list, setList] = useState([]);

    useEffect(() => {
        // 1️⃣ Load previous enrollments
        fetch("http://localhost:5000/api/enroll/all")
            .then(res => res.json())
            .then(data => setList(data));

        // 2️⃣ Connect socket
        const socket = io("http://localhost:5000");

        // 3️⃣ Listen for new enrollments
        socket.on("new-enrollment", (data) => {
            setList(prev => [data, ...prev]);
        });

        return () => socket.disconnect();
    }, []);

    return (
        <div>
            <h1>Admin Enrollment Notifications</h1>

            <div style={{ marginTop: "20px" }}>
                {list.length === 0 && <p>No enrollments yet.</p>}

                {list.map((i) => (
                    <p key={i._id}>
                        <strong>{i.name}</strong> enrolled for <b>{i.course}</b>
                        <br />
                        Phone: {i.phone} | Email: {i.email}
                    </p>
                ))}
            </div>
        </div>
    );
}
