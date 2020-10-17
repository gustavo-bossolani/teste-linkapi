import { container } from 'tsyringe';

import './providers';

import IOrderRepository from '@modules/order/repositories/IOrderRepository';
import OrderRepositoryImpl from '@modules/order/infra/typeorm/repositories/OrderRepositoryImpl';

container.registerSingleton<IOrderRepository>(
  'OrderRepository',
  OrderRepositoryImpl,
);
