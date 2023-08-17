import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import TractorStore from "./store/TractorStore";

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
      tractor: new TractorStore(),
  }}>
    <App />
  </Context.Provider>
);
