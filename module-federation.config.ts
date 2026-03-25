import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';
import { isDev } from './src/shared/lib/isDev';

export default createModuleFederationConfig({
  name: 'host',
  remotes: {
    remote: isDev
      ? `remote@http://localhost:3001/mf-manifest.json`
      : `remote@https://remote-cw7z.vercel.app/mf-manifest.json`,
  },
  shared: {
    react: {
      singleton: true,
      requiredVersion: '^18.3.1',
      eager: true
    },
    'react-dom': {
      singleton: true,
      requiredVersion: '^18.3.1',
      eager: true
    },
    '@happycode-core/counter-store': { singleton: true }
  },
  shareStrategy: 'version-first',
  dts: false,
  bridge: {
    enableBridgeRouter: true
  }
});
