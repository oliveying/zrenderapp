import React, { Suspense, useEffect } from 'react';

import { routes } from './routes';

import { Routes, Route } from 'react-router-dom';
import './App.css';
import { generateRoutes } from './utils/routeUtils';

// import zrender from 'zrender'
function App() {
  
  return (
    <div className="App" style={{ width: '100vw', height: '100vh' }}>
      <Suspense fallback={null}>
        <Routes>{generateRoutes(routes)}</Routes>
      </Suspense>
    </div>
  );
}

export default App;
