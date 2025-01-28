import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';
// import { resolve } from 'path';

type ModuleFederationConfig = ConstructorParameters<typeof ModuleFederationPlugin>[0];

const config: ModuleFederationConfig = {
  name: 'host',
  filename: 'remoteEntry.js',
  remotes: {
    products: 'products@http://localhost:4201/mf-manifest.json',
  },
  shared: ['react', 'react-dom'],
  // runtimePlugins: [resolve(__dirname, './dynamic-remote.ts')],
};

export default config;
