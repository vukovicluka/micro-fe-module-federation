import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductDetails from './product-details/product-details';
import ProductsList from './products-list/products-list';

function ProductsRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductsList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default ProductsRouter;
