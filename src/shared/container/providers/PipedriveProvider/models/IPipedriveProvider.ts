import IPipedriveDealsDTO from '../dtos/IPipedriveDealsDTO';
import IPipedriveProductDTO from '../dtos/IPipedriveProductDTO';

export default interface IPipedriveProvider {
  getDeals(): Promise<IPipedriveDealsDTO>;
  getProductsForADeal(deal_id: number): Promise<IPipedriveProductDTO>;
}
