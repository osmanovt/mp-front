import { FC } from 'react';
import { Helmet } from 'react-helmet';
import { ProductGroup, ProductGroupContainer } from './styled';
import { PageWrapper } from 'App.styled';
import { dummyProducts } from '../dummyProducts';
import ProductCard from 'blocks/ProductCard';

const HomePage: FC = () => {
    return (
      <>
          <Helmet>
              <title>Главная страница - Marketplace</title>
          </Helmet>
          <PageWrapper>
              <ProductGroup>
                  <h2>Рекомендуемые товары</h2>
                  <ProductGroupContainer>
                      {dummyProducts.map((p) => (
                        <ProductCard
                          key={p.id}
                          {...p}
                        />
                      ))}
                  </ProductGroupContainer>
              </ProductGroup>
          </PageWrapper>
      </>
    );
};

export default HomePage;
