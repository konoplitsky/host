import { getInstance } from '@module-federation/runtime';
import { lazyLoadComponentPlugin } from '@module-federation/bridge-react';

export const instance = getInstance();
instance!.registerPlugins([lazyLoadComponentPlugin()]);
