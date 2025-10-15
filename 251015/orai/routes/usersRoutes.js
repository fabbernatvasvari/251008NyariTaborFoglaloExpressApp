import {Router} from "express";
import * as User from '../data/user.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
export const router = executeUserActions();



function executeUserActions() {
    const router = Router();

    router.get('/', (req, res) => {
        const users = User.getUsers();
        res.json(users);
    });

    router.get('/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const user = User.getUserById(id);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    });

    router.post('/', (req, res) => {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ message: 'Missing required fields' });
        }
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);
        const newUser = { name, email, password: hashedPassword };
        const result = User.saveUser(newUser);
        res.status(201).json({ id: result.lastInsertRowid, ...newUser });
    });

    router.put('/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const { name, email, password } = req.body;
        const existingUser = User.getUserById(id);
        if (!existingUser) {
            return res.status(404).json({ message: 'User not found' });
        }
    });

    router.patch('/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const { name, email, password } = req.body;
        const existingUser = User.getUserById(id);
        if (!existingUser) {
            return res.status(404).json({ message: 'User not found' });
        }
    });

    router.delete('/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const existingUser = User.getUserById(id);
        if (!existingUser) {
            return res.status(404).json({ message: 'User not found' });
        }
    });

    router.post('login', (req, res) => {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(401).json({ message: 'Invalid Credentials' });
        }
        const user = User.getUserByEmail(email);
        if (!user || !bcrypt.compareSync(password, user.password)) {
            return res.status(401).json({ message: 'Invalid Credentials' });
        }
        if (!bcrypt.compareSync(password, user.password)) {
            return res.status(401).json({ message: 'Invalid Credentials' });
        }
        req.userId = user.id;
        const token = jwt.sign({ id: user.id }, 'secret_key', { expiresIn: '1h' });
        res.json({ message: 'Login successful' });
        });

    const updatedUser = {
        name: name || existingUser.name,
        email: email || existingUser.email,
        password: password ? bcrypt.hashSync(password, bcrypt.genSaltSync(10)) : existingUser.password
    };
    User.updateUser(id, updatedUser);
    res.json({ id, ...updatedUser });
    return router;
}
