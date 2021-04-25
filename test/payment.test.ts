import { expect } from 'chai';
import { getCustomRepository, getRepository } from 'typeorm';
import { Orders, Payments } from '../db/entities';
import { user } from '../assets/constants';
import PaymentRepository from '../repositories/paymentRepository';

describe('payment', () => {
  it('create payment', async () => {
    const paymentRepo = getCustomRepository(PaymentRepository);
    const payment = await paymentRepo.save(user.id, <Payments>{ order_id: 1 });
    expect(payment).to.have.property('id');
  });

  it('delete payment', async () => {
    const paymentRepo = getRepository(Payments);
    await paymentRepo.delete(1);
  });
});
