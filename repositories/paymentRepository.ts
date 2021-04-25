import { EntityRepository } from 'typeorm';
import { OrderItems, Orders, Payments } from '../db/entities';
import BaseRepository from './baseRepository';

const _ = require('lodash');

@EntityRepository(Payments)
export default class PaymentRepository extends BaseRepository<Payments> {}
