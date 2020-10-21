import { container } from 'tsyringe';
import { Request, Response } from 'express';

import ListOrdersService from '@modules/order/services/ListOrdersService';
import StatusCode from '@shared/infra/http/routes/StatusCode';

export default class OrderController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listOrders = container.resolve(ListOrdersService);

    const orders = await listOrders.execute();

    return response.status(StatusCode.OK).json(orders);
  }
}
