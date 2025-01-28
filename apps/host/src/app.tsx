import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
// import {init} from "@module-federation/runtime"
import App from './app/app';
import './styles.css';

// init({
//   name: "host",
//   // Another way to register the remote
//   remotes: [{
//     "name": "products",
//     "entry": "http://fake.com/mf-manifest.json",
//   }]
// })

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
