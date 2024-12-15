import React, { useState } from 'react';


// Add a new application form
const AddApplicationForm = ({ onAddApplication }) => {
    const [company, setCompany] = useState('');
    const [position, setPosition] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddApplication({ company, position, status });
        setCompany('');
        setPosition('');
        setStatus('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Company:</label>
                <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Position:</label>
                <input
                    type="text"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Status:</label>
                <input
                    type="text"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Add Application</button>
        </form>
    );
};

export default AddApplicationForm;