import { container } from 'tsyringe';

import FormatDateProvider from './implementations/FormatDateProvider';
import IFormatDateProvider from './models/IFormatDateProvider';

container.registerSingleton<IFormatDateProvider>(
  'FormatDateProvider',
  FormatDateProvider,
);
