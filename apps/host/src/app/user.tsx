import { useContextProfile, useProfile, useStoreProfile } from '@custom-mfe/store';

export function User() {
  const { data } = useProfile();
  const { get, set } = useStoreProfile();
  const { profile, setProfile } = useContextProfile();

  const storeProfile = get();

  return (
    <>
      <div>User Profile: {JSON.stringify(data)}</div>
      <div>
        Store User Profile: {JSON.stringify(storeProfile)}
        <button onClick={() => set({ id: crypto.randomUUID(), name: 'Store Joe User' })}>
          Mutate Store Profile
        </button>
      </div>
      <div>
        Context User Profile {JSON.stringify(profile)}
        <button onClick={() => setProfile({ id: crypto.randomUUID(), name: 'Context Joe User' })}>
          Mutate Context Profile
        </button>
      </div>
    </>
  );
}
