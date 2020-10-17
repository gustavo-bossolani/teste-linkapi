import { inject, injectable } from 'tsyringe';

import IOrderRepository from '@modules/order/repositories/IOrderRepository';
import Order from '../infra/typeorm/schemas/Order';

interface IRequestDTO {
  name: string;
  total: number;
}

@injectable()
export default class CreateOrderService {
  constructor(
    @inject('OrderRepository')
    private orderRepository: IOrderRepository,
  ) {}

  public async execute({ name, total }: IRequestDTO): Promise<Order> {
    const order = await this.orderRepository.create({
      name,
      total,
    });

    return order;
  }
}
