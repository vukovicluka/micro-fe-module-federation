import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import Button from './components/remote-button';
import './styles.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <>
      <p>You are running in the remote.</p>
      <Button />
    </>
  </StrictMode>
);
