import { EntityRepository } from 'typeorm';
import { Payments } from '../db/entities/Payments';
import BaseRepository from './baseRepository';

@EntityRepository(Payments)
export default class PaymentRepository extends BaseRepository<Payments> {}
