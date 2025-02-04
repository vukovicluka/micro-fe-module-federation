import { useQuery } from '@tanstack/react-query';
import { UserProfile } from '..';

async function fetchProfile() {
  return new Promise<UserProfile>((resolve, reject) => {
    resolve({
      id: crypto.randomUUID(),
      name: 'Joe User',
    } satisfies UserProfile);
  });
}

export function useProfile() {
  const { data, isPending, error } = useQuery({ queryKey: ['profile'], queryFn: fetchProfile });

  return { data, isPending, error };
}
