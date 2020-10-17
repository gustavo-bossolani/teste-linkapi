import { getMongoRepository, MongoRepository } from 'typeorm';

import IOrderRepository from '@modules/order/repositories/IOrderRepository';
import ICreateOrderDTO from '@modules/order/dtos/ICreateOrderDTO';

import Order from '../schemas/Order';

export default class OrderRepositoryImpl implements IOrderRepository {
  private ormRepository: MongoRepository<Order>;

  constructor() {
    this.ormRepository = getMongoRepository(Order);
  }

  public async create({ name, total }: ICreateOrderDTO): Promise<Order> {
    const order = this.ormRepository.create({
      name,
      total,
    });

    await this.ormRepository.save(order);

    return order;
  }
}
