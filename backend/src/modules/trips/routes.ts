import { Router } from 'express';

const router = Router();

router.get('/', (_req, res) => res.json({ message: 'trips root' }));

export default router;
