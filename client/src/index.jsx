import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';

function App() {
    const [jobs, setJobs] = useState([]);
    const [jobTitle, setJobTitle] = useState('');

    const addJob = () => {
        setJobs([...jobs, jobTitle]);
        setJobTitle('');
    };

    return (
        <div>
            <h1>Job Tracker</h1>
            <input 
                type="text" 
                value={jobTitle} 
                onChange={(e) => setJobTitle(e.target.value)} 
                placeholder="Enter job title" 
            />
            <button onClick={addJob}>Add Job</button>
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>{job}</li>
                ))}
            </ul>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));