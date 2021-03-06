import React from 'react';
import Loadable from 'components/Loadable';
import {PrivateLayout} from 'components/Layouts';

import renderRoutes from './../routes';

export default {
  exact: false,
  auth: true,
  path: '/products',
  component: ({routes}) => {
    return <PrivateLayout>{renderRoutes(routes)}</PrivateLayout>;
  },
  routes: [
    {
      exact: true,
      auth: true,
      path: '/products',
      component: Loadable({
        loader: () => import('./products'),
      }),
    },
    {
      exact: true,
      auth: true,
      path: '/products/create',
      component: Loadable({
        loader: () => import('./products-create'),
      }),
    },
    {
      exact: true,
      auth: true,
      path: '/products/:id/edit',
      component: Loadable({
        loader: () => import('./products-update'),
      }),
    },
  ],
};
