import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from '@/app/app.tsx';

import '@fontsource-variable/geologica';

import './scss/global.scss';

const root = document.getElementById('root');
if (!root) throw new Error('No root element found');

createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
