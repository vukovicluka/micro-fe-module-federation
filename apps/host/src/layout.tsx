import { logger } from '@custom-mfe/logger';
import { PropsWithChildren, useEffect } from 'react';
import { User } from './app/user';

export default function Layout({ children }: PropsWithChildren) {
  useEffect(() => {
    return logger.subscribe((event) => {
      console.log('Host Event Received: ', event.message);
    });
  }, []);

  return (
    <>
      <nav>
        <User />
      </nav>
      {children}
    </>
  );
}
