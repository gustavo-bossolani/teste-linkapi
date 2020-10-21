import { Router } from 'express';

import orderRouter from '@modules/order/infra/http/routes/order.routes';

const routes = Router();

routes.use('/orders', orderRouter);

export default routes;
