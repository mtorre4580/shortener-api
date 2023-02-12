import { Router } from 'express';
import { createShortenerURL, getLongURL } from './handlers';

const router = Router();

router.post('/tiny', createShortenerURL);
router.get('/tiny/:number', getLongURL);

export default router;
