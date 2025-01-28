import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';
import { composePlugins, withNx, withReact } from '@nx/rspack';
import mfConfig from './module-federation.config';

export default composePlugins(withNx(), withReact(), (config) => {
  config.plugins?.push(new ModuleFederationPlugin(mfConfig));

  // config.output = {
  //   ...config.output,
  //   publicPath: '/',
  // };

  return config;
});
