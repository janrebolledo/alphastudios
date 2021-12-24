import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <App />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/work" element={<Work />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/shop" element={<Shop />} />
      <Route exact path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
  </BrowserRouter>,
  document.getElementById("root")
);
