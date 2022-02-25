import React, { lazy } from 'react';

const Zrenderdemo = lazy(() => import('../pages/zrender-demo'));

export const routes = [
  {
    path: 'zrender', // 新年活动页
    pathname: 'zrender', // 新年活动页
    element: <Zrenderdemo />,
  },
  {
    path: '*',
    pathname: '*',
    element: <div>404</div>,
  },
];

// export default AuthRouter;
