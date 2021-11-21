import * as React from "react";
import { registerRootComponent } from 'expo';
import App from './src/app';

const Index = () => {
  return <App />
};
registerRootComponent(Index);
