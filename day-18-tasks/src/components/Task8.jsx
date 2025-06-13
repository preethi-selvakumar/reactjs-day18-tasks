import React, { useState } from 'react';
import axios from 'axios';

const Task8 = () => {
    const [userId, setUserId] = useState('');
    const [status, setStatus] = useState('');

    const handleDelete = (e) => {
        e.preventDefault();

        if (!userId) {
            setStatus("Please enter a valid user ID.");
            return;
        }

        axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(() => {
                setStatus(`User with ID ${userId} deleted successfully.`);
                setUserId('');
            })
            .catch(() => {
                setStatus("Failed to delete user.");
            });
    };

    return (
        <div className="task8">
            <h2>Delete User</h2>
            <form onSubmit={handleDelete}>
                <label>
                    User ID:
                    <input
                        type="number"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Delete</button>
            </form>
            {status && <p className="status">{status}</p>}
        </div>
    );
};

export default Task8;
