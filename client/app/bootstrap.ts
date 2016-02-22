import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { RoomsModule } from './config/app';

const platform = platformBrowserDynamic();
platform.bootstrapModule(RoomsModule);
