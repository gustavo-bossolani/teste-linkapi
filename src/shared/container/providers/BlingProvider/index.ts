import { container } from 'tsyringe';

import BlingProvider from './implementations/BlingProvider';
import IBlingProvider from './models/IBlingProvider';

container.registerSingleton<IBlingProvider>('BlingProvider', BlingProvider);
