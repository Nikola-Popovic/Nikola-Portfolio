import React from 'react';
import { Homepage } from '../../pages/Homepage';
import { Projects } from '../../pages/Projects';
import {
  createBrowserRouter,
} from 'react-router-dom';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />
  },
  {
    path: '/projects',
    element: <Projects />
  }
]);