import { FC } from 'react';
import { Helmet } from 'react-helmet';

interface ProductDetailsPageProps {

}

const ProductDetailsPage: FC<ProductDetailsPageProps> = () => {
    return (
      <>
          <Helmet>
              <title>Главная страница - Marketplace</title>
          </Helmet>
          <h1>Детали продукта</h1>
      </>

    );
};

export default ProductDetailsPage;
