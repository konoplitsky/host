import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';
import { isDev } from './src/shared/lib/isDev';

export default createModuleFederationConfig({
  name: 'host',
  remotes: {
    remote: isDev
      ? `remote@${process.env.MANIFEST_REMOTE_LOCAL}`
      : `remote@${process.env.MANIFEST_REMOTE_PROD}`,
    // remote2: 'remote2@http://localhost:3002/mf-manifest.json'
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
  dts: {
    consumeTypes: {
      remoteTypeUrls: async () => ({
        remote: {
          zip: isDev
              ? 'http://localhost:3001/@mf-types.zip'
              : 'https://remote-cw7z-cetg2m268-axius-projects.vercel.app/@mf-types.zip',
          api: isDev
              ? 'http://localhost:3001/@mf-types.zip'
              : 'https://remote-cw7z-cetg2m268-axius-projects.vercel.app/@mf-types.zip'
        }
      })
    }
  },
  bridge: {
    enableBridgeRouter: true
  }
});
