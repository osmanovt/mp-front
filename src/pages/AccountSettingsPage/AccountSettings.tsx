import { FC } from 'react';
import { Helmet } from 'react-helmet';

interface AccountSettingsProps {

}

const AccountSettings: FC<AccountSettingsProps> = () => {
    return (
      <>
          <Helmet>
              <title>Главная страница - Marketplace</title>
          </Helmet>
          <h1>Настройки аккаунта</h1>
      </>
    );
};

export default AccountSettings;
