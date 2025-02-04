import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';
import { composePlugins, withNx, withReact } from '@nx/rspack';
import * as path from 'path';
import mfConfig from './module-federation.config';

export default composePlugins(withNx(), withReact(), (config, ctx) => {
  config.plugins?.push(new ModuleFederationPlugin(mfConfig));

  // config.output = {
  //   ...config.output,
  //   publicPath: '/',
  // };

  config.resolve = {
    ...(config.resolve ?? {}),
    alias: {
      ...(config.resolve?.alias ?? {}),
      '@custom-mfe/logger': path.resolve(ctx.context.root, 'dist/packages/logger'),
    },
  };

  return config;
});
