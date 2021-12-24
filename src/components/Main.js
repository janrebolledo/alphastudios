import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Work from "../pages/Work";
import About from "../pages/About";
import Shop from "../pages/Shop";
import Contact from "../pages/Contact";

const Main = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/work" element={<Work />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/shop" element={<Shop />} />
            <Route exact path="/contact" element={<Contact />} />
        </Routes>
    );
}

export default Main;