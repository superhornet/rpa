import * as express from 'express';
export const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { title: 'Railroads Remote Process Automation' });
});

router.get('/search', (req, res) => {
    const { query } = req.query;
    res.render('search', {title: `Search Results - ${decodeURIComponent(query as string)}`,
        query: decodeURIComponent(query as string)});
})
