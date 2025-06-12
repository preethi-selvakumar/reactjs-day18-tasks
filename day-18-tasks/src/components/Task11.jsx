import React, { useEffect, useState } from 'react';
import task11Axios from '../api/task11Axios';

const Task11 = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cancelMessage, setCancelMessage] = useState('');

    useEffect(() => {
        const controller = new AbortController();

        task11Axios
            .get('/posts', { signal: controller.signal })
            .then((res) => {
                setPosts(res.data.slice(0, 5));
                setLoading(false);
            })
            .catch((error) => {
                if (error.name === 'CanceledError') {
                    setCancelMessage('Request was cancelled.');
                } else {
                    setCancelMessage('Failed to fetch data.');
                }
                setLoading(false);
            });

        return () => {
            controller.abort();
        };
    }, []);

    return (
        <div className="task11">

            {loading && <p className="loading">Loading posts...</p>}
            {cancelMessage && <p className="cancel">{cancelMessage}</p>}

            <ul className="post-list">
                {!loading && posts.map(post => (
                    <li key={post.id}>
                        <h4>{post.title}</h4>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Task11;
