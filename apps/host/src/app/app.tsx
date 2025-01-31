import RemoteProductsRouter from 'products/ProductsRouter';

export function App() {
  return (
    <>
      <h1>Host app</h1>
      <p>Hi, I'm the host.</p>
      <RemoteProductsRouter />
    </>
  );
}

export default App;
