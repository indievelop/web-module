import React from 'react';
import asyncComponent from '../components/AsyncComponent';

export const routes = [
  {
    path: '/',
    exact: true,
    component: asyncComponent(() => import('../pages/Home')),
  },
  {
    path: '/signin',
    exact: true,
    component: asyncComponent(() => import('../pages/SignIn')),
  },
  {
    path: '/signup',
    exact: true,
    component: asyncComponent(() => import('../pages/SignUp')),
  },
  {
    path: '',
    component: asyncComponent(() => import('../pages/NotFoundPage')),
  }
];
