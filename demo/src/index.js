import React, { Component, useState } from 'react';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,Navigate
} from "react-router-dom";
import App from "./App";
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Main';
import Jojo from './routes/jojo';
const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route path="main" element={<Main />} />
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />} />
        <Route path="jojo" element={<Jojo />} />
      </Route>
      <Route
        path="*"
        element={<Navigate to="/invoices" />}
      />
      <Route
        path="/"
        element={<Navigate to="/invoices" />}
      />
    </Routes>
  </BrowserRouter>,
  rootElement
);
