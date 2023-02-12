import { Router } from 'express';
import { createShortenerURL, getLongURL } from './handlers';

const router = Router();

router.post('/shortener', createShortenerURL);

router.get('/shortener/:number', getLongURL);

export default router;
