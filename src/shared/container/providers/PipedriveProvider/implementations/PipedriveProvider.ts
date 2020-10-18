import IPipedriveDealsDTO from '../dtos/IPipedriveDealsDTO';
import IPipedriveProvider from '../models/IPipedriveProvider';

import api from '../config/axios';
import IPipedriveProductDTO from '../dtos/IPipedriveProductDTO';

export default class PipedriveProvider implements IPipedriveProvider {
  public async getDeals(): Promise<IPipedriveDealsDTO> {
    const response = await api.get<IPipedriveDealsDTO>('deals?status=won', {
      params: {
        status: 'won',
        api_token: '',
      },
    });

    return response.data;
  }

  public async getProductsForADeal(
    deal_id: number,
  ): Promise<IPipedriveProductDTO> {
    const response = await api.get<IPipedriveProductDTO>(
      `deals/${deal_id}/products`,
      {
        params: {
          api_token: '',
        },
      },
    );

    return response.data;
  }
}
