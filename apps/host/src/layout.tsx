import { logger } from '@custom-mfe/logger';
import { PropsWithChildren, useEffect } from 'react';

export default function Layout({ children }: PropsWithChildren) {
  useEffect(() => {
    return logger.subscribe((event) => {
      console.log('Host Event Received: ', event.message);
    });
  }, []);

  return children;
}
