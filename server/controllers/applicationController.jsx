import { Application } from '../models/index.js';
import { authenticateUser } from '../middleware/authMiddleware.js'; // Import the middleware function

export async function getApplications(req, res) { 
    try {
        const userId = req.user.id;
        const applications = await Application.findAll({ where: { userId } });
        res.json(applications);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error fetching applications' });
    }
}


export async function addApplication(req, res) {
    try {
        const userId = req.user.id;
        const { company, jobTitle, status, deadline, notes } = req.body;
        const newApp = await Application.create({ userId, company, jobTitle, status, deadline, notes });
        res.json(newApp);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error adding application' });
    }
}