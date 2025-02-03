import { BrowserRouter } from 'react-router-dom';
import ProductsRouter from '../components/products-router';

function App() {
  return (
    <BrowserRouter>
      <ProductsRouter />
    </BrowserRouter>
  );
}

export default App;
