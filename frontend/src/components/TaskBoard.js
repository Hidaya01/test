import React, { useState, useEffect } from 'react';
import axios from '../services/api';

function TaskBoard() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get('/api/tasks')
            .then((response) => {
                setTasks(response.data);
            })
            .catch((error) => {
                console.error('Error fetching tasks:', error);
            });
    }, []);

    return (
        <div>
            <h2>Task Board</h2>
            <div className="kanban-board">
                {['to do', 'in progress', 'done'].map((status) => (
                    <div key={status}>
                        <h3>{status.toUpperCase()}</h3>
                        <ul>
                            {tasks
                                .filter((task) => task.status === status)
                                .map((task) => (
                                    <li key={task.id}>{task.title}</li>
                                ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TaskBoard;
