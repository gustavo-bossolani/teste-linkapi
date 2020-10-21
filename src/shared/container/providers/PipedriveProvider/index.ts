import { container } from 'tsyringe';

import IPipedriveProvider from './models/IPipedriveProvider';
import PipedriveProvider from './implementations/PipedriveProvider';

container.registerSingleton<IPipedriveProvider>(
  'PipedriveProvider',
  PipedriveProvider,
);
