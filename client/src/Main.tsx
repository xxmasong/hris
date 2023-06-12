import { ComponentType, Fragment, StrictMode } from 'react';
import { HelmetProvider } from 'react-helmet-async';

import './typography.css';

function Main(App: ComponentType) {

  return (
    <Fragment>
      <StrictMode>
        <HelmetProvider>
            <App />
        </HelmetProvider>
      </StrictMode>
    </Fragment>
  );
}

export default Main;
