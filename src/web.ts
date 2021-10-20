import { WebPlugin } from '@capacitor/core';

import type { SaveCredentialsPlugin } from './definitions';

export class SaveCredentialsWeb
  extends WebPlugin
  implements SaveCredentialsPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
