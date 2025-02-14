import { Components } from '@custom-mfe/components';
import { logger } from '@custom-mfe/logger';
import { useContextProfile, useProfile, useStoreProfile } from '@custom-mfe/store';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './products-list.module.css';

interface Product {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const mockProducts: Product[] = [
  {
    id: 1,
    title: 'Wireless Headphones',
    description: 'High-quality wireless headphones with noise cancellation',
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',
  },
  {
    id: 2,
    title: 'Smart Watch',
    description: 'Modern smartwatch with health tracking features',
    imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80',
  },
  {
    id: 3,
    title: 'Digital Camera',
    description: 'Professional digital camera for photography enthusiasts',
    imageUrl: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&q=80',
  },
  {
    id: 4,
    title: 'Laptop',
    description: 'Powerful laptop for work and entertainment',
    imageUrl: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80',
  },
];

function ProductsList() {
  const { data } = useProfile();
  const { get } = useStoreProfile();
  const { profile } = useContextProfile();

  const storeProfile = get();

  return (
    <div className={styles.container}>
      <Components />
      <div className={styles.productGrid}>
        <div>User Profile {JSON.stringify(data)}</div>
        <div>Store User Profile {JSON.stringify(storeProfile)}</div>
        <div>Context User Profile {JSON.stringify(profile)}</div>
        {mockProducts.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className={styles.productCard}
            onClick={() => {
              logger.logInfo(`You clicked ${product.title}`);
            }}>
            <div className={styles.imageContainer}>
              <img src={product.imageUrl} alt={product.title} className={styles.productImage} />
            </div>
            <h3 className={styles.productTitle}>{product.title}</h3>
            <p className={styles.productDescription}>{product.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

// COMPONENT-LEVEL OWNERSHIP DESIGN pattern
// If we don't want to share store data (context) accross different modules,
// we can instantiate and use different query client
// i.e. below

// const queryClient = new QueryClient();

// const ProductsListWrapper = () => {
//   return (
//     <QueryClientProvider client={queryClient}>
//       <ProductsList />
//     </QueryClientProvider>
//   );
// };

export default ProductsList;
