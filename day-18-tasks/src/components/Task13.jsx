import React, { useEffect, useState } from 'react';
import task13Axios from '../api/task13Axios';

const Task13 = () => {
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState('Loading...');

    const fetchTodos = async () => {
        try {
            const response = await task13Axios.get('/todos?_limit=5');
            setTodos(response.data);
            setStatus('');
        } catch (error) {
            setStatus('Failed to fetch TODOs.');
        }
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <div className="task13">
            {status && <p className="status">{status}</p>}
            <ul className="todo-list">
                {todos.map(todo => (
                    <li key={todo.id} className={todo.completed ? 'completed' : ''}>
                        {todo.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Task13;
