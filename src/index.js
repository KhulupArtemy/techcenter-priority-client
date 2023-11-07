import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CatalogStore from "./store/CatalogStore";
import PartnersStore from "./store/PartnersStore";
import TendersStore from "./store/TendersStore";
import ClientsStore from "./store/ClientsStore";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
      catalog: new CatalogStore(),
      partners: new PartnersStore(),
      tenders: new TendersStore(),
      clients: new ClientsStore(),
  }}>
    <App/>
  </Context.Provider>
);
