import React, { Component, useState } from 'react';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,Navigate
} from "react-router-dom";
import App from "./App";
import Users from "./routes/users";
import Invoices from "./routes/invoices";
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Main';
import Jojo from './routes/jojo';
import AddEditUser from './routes/user/AddEditUser';
import DashBoard from './routes/dashboard';
const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route index  element={<DashBoard />} />
        <Route path="users" element={<Users />} />
        <Route path="users/:userId" element={<AddEditUser />} />
        <Route path="invoices" element={<Invoices />} />
        <Route path="jojo" element={<Jojo />} />
      </Route>
      <Route
        path="*"
        element={<Navigate to="/" />}
      />
      {/* <Route
        path=""
        element={<Navigate to="/dashboard" />}
      /> */}
    </Routes>
  </BrowserRouter>,
  rootElement
)
