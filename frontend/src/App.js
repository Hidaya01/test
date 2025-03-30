import React from 'react';
import Chat from './components/Chat';
import Notification from './components/Notification';
import ProjectList from './components/ProjectList';
import TaskBoard from './components/TaskBoard';

function App() {
    return (
        <div>
            <h1>Project Management App</h1>
            <Notification />
            <ProjectList />
            <TaskBoard />
            <Chat />
        </div>
    );
}

export default App;
