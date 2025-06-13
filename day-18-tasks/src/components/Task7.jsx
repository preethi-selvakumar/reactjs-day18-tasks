import React, { useState } from 'react';
import axios from 'axios';

const Task7 = () => {
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        email: ''
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { id, name, email } = formData;

        if (!id) {
            setStatus("User ID is required to update.");
            return;
        }

        axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, {
            name,
            email
        })
            .then(() => {
                setStatus("User updated successfully!");
            })
            .catch(() => {
                setStatus("Failed to update user.");
            });
    };

    return (
        <div className="task7">
            <h2>Update User Data</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    User ID:
                    <input
                        type="number"
                        name="id"
                        value={formData.id}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Update</button>
            </form>

            {status && <p className="status">{status}</p>}
        </div>
    );
};

export default Task7;
