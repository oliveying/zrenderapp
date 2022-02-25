import React from 'react';
import { Route } from 'react-router-dom';


export const generateRoutes = (routes) =>
  routes.map(({ path = '/', element }) => {
    return (
      <Route key={path} path={path} element={element} />
    );
  });
