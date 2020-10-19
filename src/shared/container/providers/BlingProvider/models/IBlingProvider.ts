import ICreateOrderDTO from '../dtos/ICreateOrderDTO';

export default interface IBlingProvider {
  createOrder(order: ICreateOrderDTO): Promise<void>;
}
