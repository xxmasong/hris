import { ComponentType, StrictMode } from 'react';

function Main(App: ComponentType) {
  return (
    <StrictMode>
      <App />
    </StrictMode>
  );
}

export default Main;
