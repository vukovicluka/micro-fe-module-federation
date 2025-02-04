import { useProfile } from '@custom-mfe/store';

export function User() {
  const { data } = useProfile();

  return <div>User Profile {JSON.stringify(data)}</div>;
}
