import { FederationRuntimePlugin } from '@module-federation/enhanced/runtime';

// async function fetchRemote() {
//   // fetch remote URL from config service
//   fetch("...")
// }

const runtimePlugin: () => FederationRuntimePlugin = function () {
  return {
    name: 'dynamic-remote',
    async beforeRequest(params) {
      const { id, options } = params;
      const remote = options.remotes.find((r) => r.name === id);

      if (!remote) {
        return params;
      }

      // const remoteUrl = await fetchRemote()

      //@ts-expect-error RemoteWithEntry
      remote.entry = 'http://localhost:4201/mf-manifest.json';

      return params;
    },
  };
};

export default runtimePlugin;
