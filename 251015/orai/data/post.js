import db from '../db.js';

db.prepare(`
    CREATE TABLE IF NOT EXISTS posts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        userId INTEGER NOT NULL,
        title TEXT NOT NULL,
        content TEXT NOT NULL,
        FOREIGN KEY (userId) REFERENCES users(id)
    );
`).run();

export const getPosts = () => db.prepare('SELECT * FROM posts').all();

export const getPostById = (id) => db.prepare('SELECT * FROM posts WHERE id = ?').get(id);

export const savePost = (post) => (userId, )

