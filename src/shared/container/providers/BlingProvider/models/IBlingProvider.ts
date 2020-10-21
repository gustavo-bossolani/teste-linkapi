import ICreateOrderDTO from '../dtos/ICreateOrderDTO';
import ICreateOrderResponseDTO from '../dtos/ICreateOrderResponseDTO';
import IRecoveredOrderResponseDTO from '../dtos/IRecoveredOrderResponseDTO';

export default interface IBlingProvider {
  createDeal(order: ICreateOrderDTO): Promise<ICreateOrderResponseDTO>;
  getDeals(): Promise<IRecoveredOrderResponseDTO>;
}
