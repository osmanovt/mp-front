import { FC } from 'react';
import { Helmet } from 'react-helmet';
import { TestDiv } from './styled';

const HomePage: FC = () => {
    return (
      <>
          <Helmet>
              <title>Главная страница - Marketplace</title>
          </Helmet>
          <h1>Главная страница - Marketplace</h1>
          <TestDiv/>
      </>
    );
};

export default HomePage;
