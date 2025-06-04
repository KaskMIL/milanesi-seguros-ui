import { createBrowserRouter } from 'react-router';
import Root from './layout/Root';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        lazy: lazyComponent(import('./index/page/Index')),
      },
      // {
      //   path: 'propiedades',
      //   lazy: lazyComponent(import('./properties/page/PropertiesPage')),
      // }
    ]
  },
]);

function lazyComponent<T>(module: Promise<ModuleWithDefault<T>>) {
  return async () => {
    const { default: Component } = await module;
    return { Component };
  };
}

interface ModuleWithDefault<T> {
  default: T;
}
