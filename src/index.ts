import { registerPlugin } from '@capacitor/core';

import type { BarcodeScannerPlugin } from './definitions';

const BarcodeScannerCommunity = registerPlugin<BarcodeScannerPlugin>('BarcodeScannerCommunity', {
  web: () => import('./web').then((m) => new m.BarcodeScannerWeb()),
});

export * from './definitions';
export { BarcodeScannerCommunity };
