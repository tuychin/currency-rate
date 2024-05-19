import { FC } from 'react';

import { Layout } from 'components/common/Layout';
import { Menu } from 'components/common/Menu';

export const Settings: FC = () => {
  return <Layout menu={<Menu />}>Settings</Layout>;
};
