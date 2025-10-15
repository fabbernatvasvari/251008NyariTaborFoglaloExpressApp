import {Router} from "express";
import * as User from '../data/user.js';

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
        res.status(404).send({ error: 'User not found' });
    }
});

export { router as usersRoutes };