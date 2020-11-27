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

  // {
  //   path: '/expense/list',
  //   label: 'ExpenseList',
  //   exact: true,
  //   component: lazy(() => 'ExpenseList'),
  //   private: true,
  //   restricted: false,
  // },

  // {
  //   path: '/expense/categories',
  //   label: 'ExpenseCategories',
  //   exact: true,
  //   component: lazy(() => 'ExpenseCategories'),
  //   private: true,
  //   restricted: false,
  // },

  {
    path: '/expense/list',
    label: 'ExpenseList',
    exact: true,
    component: lazy(() => 'ExpenseList'),
    private: true,
    restricted: false,
  },

  {
    path: '/expense/categories',
    label: 'ExpenseCategories',
    exact: true,
    component: lazy(() => 'ExpenseCategories'),
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
