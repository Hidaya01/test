import React from 'react';
import ReactDOM from 'react-dom/client'; // <== Note le changement ici
import App from './App';
import './index.css'; // Optional CSS file for global styles

const root = ReactDOM.createRoot(document.getElementById('root')); // Nouvelle API
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
