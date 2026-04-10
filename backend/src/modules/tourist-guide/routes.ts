import { Router } from 'express';

const router = Router();

router.get('/', (_req, res) => res.json({ message: 'tourist-guide root' }));

export default router;
