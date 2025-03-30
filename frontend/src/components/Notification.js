import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3000');

function Notification() {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        socket.on('notification', (notif) => {
            setNotifications((prev) => [...prev, notif]);
        });

        return () => {
            socket.off('notification');
        };
    }, []);

    return (
        <div>
            <h2>Notifications</h2>
            <ul>
                {notifications.map((notif, index) => (
                    <li key={index}>{notif}</li>
                ))}
            </ul>
        </div>
    );
}

export default Notification;
