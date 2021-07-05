import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { TodoContextProvider } from './context/todo-context'
import { UserContextProvider } from './context/user-context'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <TodoContextProvider>
          <App />
        </TodoContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)