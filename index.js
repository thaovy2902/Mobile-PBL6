import * as React from 'react';
import { registerRootComponent } from 'expo';
import { Provider } from 'react-redux';
import { SSRProvider } from '@react-aria/ssr';
import App from './src/app';
import { persistor, store } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const Index = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <SSRProvider>
        <App />
      </SSRProvider>
    </PersistGate>
  </Provider>
);
registerRootComponent(Index);
