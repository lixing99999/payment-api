import { createPayment, updatePayment } from '../controllers/paymentController';

const paymentRoutes = [
  {
    method: 'POST',
    path: '/payment',
    handler: createPayment,
  },
  {
    method: 'PUT',
    path: '/payment/{id}',
    handler: updatePayment,
  },
];

module.exports = paymentRoutes;
