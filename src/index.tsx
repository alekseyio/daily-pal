import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from '@app/App';

const appContainerEl = document.getElementById('app');

if (!appContainerEl) {
  throw new Error('App container element is missing');
}

createRoot(appContainerEl).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
