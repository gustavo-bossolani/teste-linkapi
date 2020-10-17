import ICreateOrderDTO from '../dtos/ICreateOrderDTO';
import Order from '../infra/typeorm/schemas/Order';

export default interface IOrderRepository {
  create(data: ICreateOrderDTO): Promise<Order>;
}
