import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Task4 = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/INVALID_URL')
            .then((response) => {
                setUsers(response.data);
                setError(null);
            })
            .catch((err) => {
                setError('Failed to fetch user data. Please try again later.');
                setUsers([]);
            });
    }, []);

    return (
        <div className="task4">
            <h2>User List</h2>
            {error ? (
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

export default Task4;
