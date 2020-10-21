import ICreateOrderDTO from '@modules/order/dtos/ICreateOrderDTO';

import Order from '../infra/typeorm/schemas/Order';

export default interface IOrderRepository {
  findAll(): Promise<Order[]>;
  create(data: ICreateOrderDTO): Promise<Order>;
  updateIfExists(order_id: string): Promise<boolean>;
}
