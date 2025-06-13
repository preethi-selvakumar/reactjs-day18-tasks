import React, { useEffect, useState } from 'react';
import task10Axios from '../api/task10Axios';

const Task10 = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        task10Axios.get('/posts?_limit=5') 
            .then((res) => {
                setPosts(res.data);
            })
            .catch(() => {
                setError('Failed to fetch posts.');
            });
    }, []);

    return (
        <div className="task10">
            {error && <p className="error">{error}</p>}
            <ul className="post-list">
                {posts.map(post => (
                    <li key={post.id}>
                        <h4>{post.title}</h4>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Task10;
