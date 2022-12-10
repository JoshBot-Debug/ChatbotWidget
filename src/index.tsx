import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const element = document.getElementsByClassName('flatworld-solutions-chat-ai')[0]

ReactDOM
  .createRoot(element)
  .render(
    <React.StrictMode>
      <App id={element.getAttribute("data-id")}/>
    </React.StrictMode>
  )