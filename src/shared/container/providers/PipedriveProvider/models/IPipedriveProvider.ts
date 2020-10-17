import IPipedriveDealsDTO from '../dtos/IPipedriveDealsDTO';

export default interface IPipedriveProvider {
  getDeals(): Promise<IPipedriveDealsDTO>;
}
