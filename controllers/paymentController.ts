import { ResponseObject, ResponseToolkit, Request } from '@hapi/hapi';
import { getCustomRepository } from 'typeorm';
import { Payments } from '../db/entities';
import PaymentRepository from '../repositories/paymentRepository';
import { user } from '../assets/constants';

const _ = require('lodash');

const paymentRepo = getCustomRepository(PaymentRepository);

export const createPayment = async ({ payload, auth }: Request, h: ResponseToolkit): Promise<ResponseObject> => {
  const payment = await paymentRepo.save(user.id, <Payments>payload);
  return h.response(payment).code(200);
};

export const updatePayment = async ({ payload, auth, params }: Request, h: ResponseToolkit): Promise<ResponseObject> => {
  const payment = await paymentRepo.update(user.id, <Payments>payload);
  return h.response(payment).code(200);
};
