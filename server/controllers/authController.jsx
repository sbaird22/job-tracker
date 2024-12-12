import { User } from '../models/index.js';
import bcrypt from 'bcrypt';
import { signToken } from '../utils/jwt.js';

export async function signup(req, res) {
    try {
        const { username, email, password } = req.body;
        if (!password) {
            return res.status(400).json({ error: 'Password is required' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ username, email, password: hashedPassword });
        if (!newUser) {
            return res.status(400).json({ error: 'User creation failed' });
        }
        const token = signToken({ id: newUser.id });
        res.json({ token, user: { username: newUser.username, email: newUser.email } });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error creating user' });
    }
}

export async function login(req, res) {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });
        if (!user) return res.status(404).json({ error: 'User not found' });

        const valid = await bcrypt.compare(password, user.password);
        if (!valid) return res.status(401).json({ error: 'Invalid credentials' });

        const token = signToken({ id: user.id });
        res.json({ token, user: { username: user.username, email: user.email } });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error logging in' });
    }
}