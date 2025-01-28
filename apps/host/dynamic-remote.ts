import { FederationRuntimePlugin } from '@module-federation/enhanced/runtime';
import { Shared, ShareScopeMap } from '@module-federation/runtime/types';

// async function fetchRemote() {
//   // fetch remote URL from config service
//   fetch("...")
// }

interface SimplifiedShare {
  [pkgName: string]: {
    version: string;
    usedIn: string[];
    from: string;
  };
}

function simplifyShareScope(shareScope: ShareScopeMap['']): SimplifiedShare {
  return Object.entries(shareScope).reduce((acc, [packageName, versions]) => {
    const [version, details] = Object.entries(versions)[0];
    const shared = details as unknown as Shared;
    acc[packageName] = {
      version,
      usedIn: shared.useIn,
      from: shared.from,
    };
    return acc;
  }, {} as SimplifiedShare);
}

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
    async onLoad(args) {
      const { options } = args;
      // default -> Federation creates by default unless customized
      const sharedScope = options.host.shareScopeMap['default'];
      const simplified = simplifyShareScope(sharedScope);
      // window.__FEDERATION__
      console.log(simplified);
    },
  };
};

export default runtimePlugin;
