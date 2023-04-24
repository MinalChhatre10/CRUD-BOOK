import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Books from "./Pages/Books";
import AddBooks from "./Pages/AddBooks";
import UpdateBooks from "./Pages/UpdateBooks";
import "./style.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/add" element={<AddBooks />} />
          <Route path="/update" element={<UpdateBooks />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

//npm install react-router-dom  --  install package
//npm i axios
//npm i cors -- in backend
