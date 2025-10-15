import db from '../db.js';

db.prepare(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        firstName TEXT NOT NULL,
        lastName TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL
    );
`).run();

export const getUsers = () => db.prepare('SELECT * FROM users').all();

export const getUserById = (id) => db.prepare('SELECT * FROM users WHERE id = ?').get(id);

export const getUserByEmail = (email) => db.prepare('SELECT * FROM users WHERE email = ?').get(email);

export const saveUser = (user) => db.prepare('INSERT INTO users (firstName, lastName, email) VALUES (?, ?, ?)').run(user.firstName, user.lastName, user.email);

export const updateUser = (id, user) => db.prepare('UPDATE users SET firstName = ?, lastName = ?, email = ? WHERE id = ?').run(user.firstName, user.lastName, user.email, id);

export const deleteUser = (id) => db.prepare('DELETE FROM users WHERE id = ?').run(id);