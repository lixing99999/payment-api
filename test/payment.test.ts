import { expect } from 'chai';
import { getCustomRepository, getRepository } from 'typeorm';
import { Orders, Payments } from '../db/entities';
import { user } from '../assets/constants';
import PaymentRepository from '../repositories/paymentRepository';

describe('payment', () => {
  it('create payment', async () => {
    const paymentRepo = getCustomRepository(PaymentRepository);
    const payment = await paymentRepo.save(user.id, <Payments>{ order_id: 1, status: Payments.TRANSACTION_SUCCESS });
    expect(payment).to.have.property('id');
  });

  it('cancel payment', async () => {
    const paymentRepo = getCustomRepository(PaymentRepository);
    const payment = await paymentRepo.update(user.id, <Payments>{ status: Payments.TRANSACTION_RETURNED });
    expect(payment).to.have.property('id');
  });
});
