import { withModuleFederation } from "@nx/module-federation/rspack";
import { composePlugins, withNx, withReact } from '@nx/rspack';
import mfConfig from "./module-federation.config";

module.exports = composePlugins(withNx(), withReact(), withModuleFederation(mfConfig), (config) => {
  return config;
});
