import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AddItems from './Component/AddItems';
import { TodoProvider } from './Store/TodoContext';
import Setting from './Component/Setting';
import CreateFolder from './Component/CreateFolder';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/addItems',
    element: <AddItems />
  },
  {
    path: 'folder',
    element: <CreateFolder/>
  },
  {
    path: '/setting',
    element: <Setting/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoProvider>
      <RouterProvider router={router} />
    </TodoProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
