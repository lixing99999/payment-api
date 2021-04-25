import { createPayment } from '../controllers/paymentController';

const paymentRoutes = [
  {
    method: 'POST',
    path: '/payment',
    handler: createPayment,
  },
];

module.exports = paymentRoutes;
