import React from 'react';
import App from './components/app/app';
import * as ReactDOMClient from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import { fetchTodoList } from './store/api-creators';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOMClient.createRoot(document.getElementById('root') as HTMLElement);
store.dispatch(fetchTodoList());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App />
    </Provider>
  </React.StrictMode>,
);
