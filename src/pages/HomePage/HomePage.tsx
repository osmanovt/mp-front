import { FC } from 'react';
import { Helmet } from 'react-helmet';
import { TestDiv } from './styled';
import { PageWrapper } from '../../App.styled';

const HomePage: FC = () => {
    return (
      <>
          <Helmet>
              <title>Главная страница - Marketplace</title>
          </Helmet>
          <PageWrapper>
              <h1>Главная</h1>
          </PageWrapper>
      </>
    );
};

export default HomePage;
