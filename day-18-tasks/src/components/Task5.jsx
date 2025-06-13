import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Task5 = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            axios.get('https://jsonplaceholder.typicode.com/users')
                .then((response) => {
                    setUsers(response.data);
                    setError(null);
                })
                .catch(() => {
                    setError('Failed to fetch user data.');
                })
                .finally(() => {
                    setLoading(false);
                });
        }, 2500); 
    }, []);

    return (
        <div className="task5">
            <h2>User List</h2>

            {loading ? (
                <p className="loading">Loading...</p>
            ) : error ? (
                <p className="error">{error}</p>
            ) : (
                <ul>
                    {users.map(user => (
                        <li key={user.id}>
                            <strong>{user.name}</strong> - {user.email}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Task5;
