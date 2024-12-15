import React, { useState, useEffect } from 'react';
import { getApplications } from '../utils/api';
import AddApplicationForm from './AddApplicationForm';
import StatusChart from './StatusChart'; // import your new chart component

function Dashboard() {
    const [applications, setApplications] = useState([]);

useEffect(() => {
    getApplications()
    .then(data => setApplications(data))
    .catch(err => console.error(err));
}, []);

const refreshApplications = () => {
    getApplications()
        .then(data => setApplications(data))
        .catch(err => console.error(err));
};

return (
    <div style={{ padding: '20px' }}>
        <h2>Your Applications</h2>
        <AddApplicationForm refresh={refreshApplications} />
        <StatusChart applications={applications} />
        <ul>
            {applications.map(app => (
            <li key={app.id}>
            {app.company} - {app.jobTitle} [{app.status}]
            </li>
            ))}
        </ul>
    </div>
    );
}

export default Dashboard;