import React, { useEffect, useState } from 'react';
import task9Axios from '../api/task9Axios';

const Task9 = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        task9Axios.get('/users')
            .then((res) => {
                setUsers(res.data);
            })
            .catch(() => {
                setError("Failed to fetch users.");
            });
    }, []);

    return (
        <div className="task9">
            {error && <p className="error">{error}</p>}
            <ul className="user-list">
                {users.map(user => (
                    <li key={user.id}>
                        <strong>{user.name}</strong> — {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Task9;
