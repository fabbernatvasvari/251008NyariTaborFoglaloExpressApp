import express      from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('GET request to the posts');
});

router.post('/', (req, res) => {
    res.send('POST request to the posts');
});

export { router as postRoutes };