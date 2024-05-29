require('dotenv').config();
import Footer from "./pages/footer/Footer";

import Header from "./pages/header/Header";
import Home from "./pages/home/Home";
import * as React from "react";

import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import "bootstrap";
import ManejoCanciones from "./pages/home/components/manejoCanciones/ManejoCanciones";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/manejo/:spotify" element={<ManejoCanciones />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
