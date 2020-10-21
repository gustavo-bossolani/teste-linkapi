import { getMongoRepository, MongoRepository } from 'typeorm';

import IOrderRepository from '@modules/order/repositories/IOrderRepository';
import ICreateOrderDTO from '@modules/order/dtos/ICreateOrderDTO';

import Order from '../schemas/Order';

export default class OrderRepositoryImpl implements IOrderRepository {
  private ormRepository: MongoRepository<Order>;

  constructor() {
    this.ormRepository = getMongoRepository(Order);
  }

  public async findAll(): Promise<Order[]> {
    const orders = await this.ormRepository.find();

    return orders;
  }

  public async create({
    numeroPedido,
    cliente,
    data,
    itens,
    totalVenda,
  }: ICreateOrderDTO): Promise<Order> {
    const order = this.ormRepository.create({
      numeroPedido,
      cliente,
      data,
      itens,
      totalVenda,
    });

    await this.ormRepository.save(order);

    return order;
  }

  public async updateIfExists(order_id: string): Promise<boolean> {
    const order = await this.ormRepository.findOne({
      where: { numeroPedido: order_id },
    });

    if (order) {
      await this.ormRepository.save(order);
      return true;
    }
    return false;
  }
}
