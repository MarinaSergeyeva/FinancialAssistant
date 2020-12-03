import { lazy } from 'react';

export const routes = [
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
    private: true,
    restricted: false,
  },

  {
    path: '/expense',
    label: 'ExpensePage',
    exact: false,
    component: lazy(() => import('../../pages/ExpensePage/ExpensePage')),
    private: true,
    restricted: false,
  },

  {
    path: '/plan',
    label: 'PlanPage',
    exact: true,
    component: lazy(() => import('../../pages/PlanPage/PlanPage')),
    private: true,
    restricted: false,
  },

  {
    path: '/notfound',
    label: 'NotFound',
    exact: true,
    component: lazy(() => import('../../pages/NotFound/NotFound')),
    private: true,
    restricted: false,
  },
];

export const homeRoute = routes.find(route => route.label === 'AuthPage');
export const dynamicsRoute = routes.find(
  route => route.label === 'DynamicsPage',
);
export const expenseRoute = routes.find(route => route.label === 'ExpensePage');
export const planRoute = routes.find(route => route.label === 'PlanPage');
export const notfoundRoute = routes.find(route => route.label === 'NotFound');
