import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Books from "./Pages/Books";
import AddBooks from "./Pages/AddBooks";
import UpdateBooks from "./Pages/UpdateBooks";
import LoginAdmin from "./Pages/LoginAdmin";
import Dashboard from "./Pages/Dashboard";
import "./style.css";
import "./Dashboard.css";
import Clients from "./Pages/Clients";
import AddClients from "./Pages/AddClients";
import UpdateClients from "./Pages/UpdateClients";
import Orders from "./Pages/Orders";
import AddOrders from "./Pages/AddOrders";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginAdmin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/book" element={<Books />} />
          <Route path="/add" element={<AddBooks />} />
          <Route path="/update/:id" element={<UpdateBooks />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/addclient" element={<AddClients />} />
          <Route path="/updateclient/:id" element={<UpdateClients />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/addorder" element={<AddOrders />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

//npm install react-router-dom  --  install package
//npm i axios
//npm i cors -- in backend

//Backend % nodemon index.js
//client % npm start

// lsof -i :8800
// kill pid
