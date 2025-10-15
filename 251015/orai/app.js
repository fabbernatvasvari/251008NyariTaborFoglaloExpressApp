import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { usersRoutes } from 'react-router-dom';
import {postRoutes } from 'react-router-dom';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
console.log(__dirname);


const PORT = 3000;
const app = express();

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

app.use(cors());
app.use(bodyParser.json());