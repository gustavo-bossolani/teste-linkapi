import IPipedriveDealsDTO from '../dtos/IPipedriveDealsDTO';
import IPipedriveProvider from '../models/IPipedriveProvider';

import api from '../config/axios';

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
}
