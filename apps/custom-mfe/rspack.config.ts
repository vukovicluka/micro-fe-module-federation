import { withModuleFederation } from "@nx/module-federation/rspack";
import { composePlugins, withNx, withReact } from '@nx/rspack';
import mfConfig from "./module-federation.config";

export default composePlugins(withNx(), withReact(), withModuleFederation(mfConfig), (config) => {
  return config;
});
