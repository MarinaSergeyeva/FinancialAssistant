import { lazy } from 'react';

export default [
  {
    path: '/',
    label: 'AuthPage',
    exact: true,
    component: lazy(() => import('../../pages/AuthPage/AuthPage')),
    private: false,
    restricted: true,
  },
  {
    path: '/dynamics',
    label: 'DynamicsPage',
    exact: true,
    component: lazy(() => import('../../pages/DynamicsPage/DynamicsPage')),
    private: false,
    restricted: true,
  },
  {
    path: '/expense',
    label: 'ExpensePage',
    exact: true,
    component: lazy(() => import('../../pages/ExpensePage/ExpensePage')),
    private: false,
    restricted: true,
  },
  {
    path: '/plan',
    label: 'PlanPage',
    exact: true,
    component: lazy(() => import('../../pages/PlanPage/PlanPage')),
    private: false,
    restricted: true,
  },
  {
    path: '/notfound',
    label: 'NotFound',
    exact: true,
    component: lazy(() => import('../../pages/NotFound/NotFound')),
    private: false,
    restricted: true,
  },
];
