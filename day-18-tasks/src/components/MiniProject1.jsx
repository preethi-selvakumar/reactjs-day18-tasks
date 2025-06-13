import React, { useEffect, useState } from 'react';
import miniAxios from '../api/miniAxios';

const MiniProject1 = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchUsers = async () => {
        setLoading(true);
        setError('');
        try {
            const response = await miniAxios.get('/users');
            setUsers(response.data);
        } catch (err) {
            setError('Failed to load users. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className="user-list-container">
            <div className="refresh-wrapper">
                <button className="refresh-button" onClick={fetchUsers}>
                    Refresh List
                </button>
            </div>

            {loading && <p className="status loading">Loading users...</p>}
            {error && <p className="status error">{error}</p>}

            <ul className="user-cards">
                {!loading && !error && users.map(user => (
                    <li key={user.id} className="user-card">
                        <h3>{user.name}</h3>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Phone:</strong> {user.phone}</p>
                        <p><strong>City:</strong> {user.address.city}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MiniProject1;
