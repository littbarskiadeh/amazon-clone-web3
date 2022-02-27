import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { MoralisProvider } from "react-moralis";
// import "antd/dist/antd.css";

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId="BKkgNCZpXqGl3kcb6sRD4dAmOwDVSU6AkuB9F5HC" serverUrl="https://xbguywprazfu.usemoralis.com:2053/server">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
