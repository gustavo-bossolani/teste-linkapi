import { container } from 'tsyringe';

import PipedriveProvider from './implementations/PipedriveProvider';
import IPipedriveProvider from './models/IPipedriveProvider';

container.registerSingleton<IPipedriveProvider>(
  'PipedriveProvider',
  PipedriveProvider,
);
