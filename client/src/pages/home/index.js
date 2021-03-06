import React from 'react';
import Loadable from 'components/Loadable';
import {StaticLayout} from 'components/Layouts';

import renderRoutes from './../routes';

export default {
  exact: false,
  path: '/',
  component: ({routes}) => {
    return <StaticLayout>{renderRoutes(routes)}</StaticLayout>;
  },
  routes: [
    {
      exact: true,
      path: '/',
      component: Loadable({
        loader: () => import('./home'),
      }),
    },
  ],
};
