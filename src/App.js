// import logo from "./logo.svg";
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';

import OrderList from './components/OrderList';

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <main>
        <OrderList />
      </main>
    </Provider>
  );
}

export default App;
