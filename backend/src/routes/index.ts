import { Router } from 'express';
import authRoutes from '../modules/auth/routes';
import tripsRoutes from '../modules/trips/routes';
import expensesRoutes from '../modules/expenses/routes';
import itineraryRoutes from '../modules/itinerary/routes';
import guideRoutes from '../modules/tourist-guide/routes';

const router = Router();

router.use('/auth', authRoutes);
router.use('/trips', tripsRoutes);
router.use('/expenses', expensesRoutes);
router.use('/itinerary', itineraryRoutes);
router.use('/tourist-guide', guideRoutes);

export default router;
