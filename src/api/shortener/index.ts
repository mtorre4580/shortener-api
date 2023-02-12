import { Router } from 'express';
import rateLimit, { MemoryStore } from 'express-rate-limit';
import { createShortenerURL, getLongURL } from './handlers';

const router = Router();

// Rate Limit for the current API
const apiRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  store: new MemoryStore(),
});

router.use(apiRateLimit);

router.post('/tiny', createShortenerURL);
router.get('/tiny/:number', getLongURL);

export default router;
