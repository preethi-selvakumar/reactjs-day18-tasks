import React, { useState } from 'react';
import axios from 'axios';

const Task6 = () => {
    const [formData, setFormData] = useState({ name: '', email: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('https://jsonplaceholder.typicode.com/users', formData)
            .then(() => {
                setStatus('User submitted successfully!');
                setFormData({ name: '', email: '' });
            })
            .catch(() => {
                setStatus('Failed to submit user.');
            });
    };

    return (
        <div className="task6">
            <h2>Create New User</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </label>
                <button type="submit">Submit</button>
            </form>

            {status && <p className="status">{status}</p>}
        </div>
    );
};

export default Task6;
