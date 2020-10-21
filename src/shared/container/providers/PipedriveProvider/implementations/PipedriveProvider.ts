import api from '../config/axios';

import IPipedriveDealsDTO from '../dtos/IPipedriveDealsDTO';
import IPipedriveProvider from '../models/IPipedriveProvider';

import IPipedriveProductDTO from '../dtos/IPipedriveProductDTO';

export default class PipedriveProvider implements IPipedriveProvider {
  public async getDeals(): Promise<IPipedriveDealsDTO> {
    const response = await api.get<IPipedriveDealsDTO>('deals', {
      params: {
        status: 'won',
        api_token: '3d1ab977bf06b65dca228bbc39954c3e4e258e73',
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
          api_token: '3d1ab977bf06b65dca228bbc39954c3e4e258e73',
        },
      },
    );

    return response.data;
  }
}
