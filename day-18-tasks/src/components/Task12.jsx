import React, { useEffect, useState } from 'react';
import task12Axios from '../api/task12Axios';

const Task12 = () => {
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState('Loading users...');

    useEffect(() => {
        task12Axios
            .get('/users')
            .then((res) => {
                setUsers(res.data);
                setMessage('');
            })
            .catch(() => {
                setMessage('Failed to fetch users after retry.');
            });
    }, []);

    return (
        <div className="task12">
            {message && <p className="info">{message}</p>}
            <ul className="user-list">
                {users.map(user => (
                    <li key={user.id}>
                        <strong>{user.name}</strong> - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Task12;
