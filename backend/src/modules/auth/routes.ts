import { Router } from 'express';

const router = Router();

router.get('/', (_req, res) => res.json({ message: 'auth root' }));

export default router;
