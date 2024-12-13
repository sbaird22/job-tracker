import express from 'express';
const router = express.Router();

// Mock data for applications
const applications = [
    { id: 1, name: 'Application 1', status: 'Pending' },
    { id: 2, name: 'Application 2', status: 'Approved' },
    { id: 3, name: 'Application 3', status: 'Rejected' },
];

// Get all applications
router.get('/applications', (req, res) => {
    res.json(applications);
});

// Get application by ID
router.get('/applications/:id', (req, res) => {
    const application = applications.find(app => app.id === parseInt(req.params.id));
    if (application) {
        res.json(application);
    } else {
        res.status(404).send('Application not found');
    }
});

// Create a new application
router.post('/applications', (req, res) => {
    const newApplication = {
        id: applications.length + 1,
        name: req.body.name,
        status: req.body.status,
    };
    applications.push(newApplication);
    res.status(201).json(newApplication);
});

// Update an application
router.put('/applications/:id', (req, res) => {
    const application = applications.find(app => app.id === parseInt(req.params.id));
    if (application) {
        application.name = req.body.name;
        application.status = req.body.status;
        res.json(application);
    } else {
        res.status(404).send('Application not found');
    }
});

// Delete an application
router.delete('/applications/:id', (req, res) => {
    const index = applications.findIndex(app => app.id === parseInt(req.params.id));
    if (index !== -1) {
        applications.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Application not found');
    }
});

export default router;