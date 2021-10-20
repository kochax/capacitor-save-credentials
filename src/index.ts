import { registerPlugin } from '@capacitor/core';

import type { SaveCredentialsPlugin } from './definitions';

const SaveCredentials = registerPlugin<SaveCredentialsPlugin>(
  'SaveCredentials',
  {
    web: () => import('./web').then(m => new m.SaveCredentialsWeb()),
  },
);

export * from './definitions';
export { SaveCredentials };
