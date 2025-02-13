import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
// import {init} from "@module-federation/runtime"
import { ProfileProvider } from '@custom-mfe/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './app/app';
import { User } from './app/user';
import Layout from './layout';
import './styles.css';

// init({
//   name: "host",
//   // Another way to register the remote
//   remotes: [{
//     "name": "products",
//     "entry": "http://fake.com/mf-manifest.json",
//   }]
// })

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <ProfileProvider>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <BrowserRouter>
            <Routes>
              <Route path="/*" element={<App />} />
              <Route path="/user" element={<User />} />
            </Routes>
          </BrowserRouter>
        </Layout>
      </QueryClientProvider>
    </ProfileProvider>
  </StrictMode>
);
