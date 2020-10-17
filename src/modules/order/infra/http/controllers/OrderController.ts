import { container } from 'tsyringe';
import { Request, Response } from 'express';

import CreateOrderService from '@modules/order/services/CreateOrderService';

export default class OrderController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, total } = request.body;

    const createOrder = container.resolve(CreateOrderService);

    const order = await createOrder.execute({
      name,
      total,
    });

    return response.status(201).json(order);
  }
}
