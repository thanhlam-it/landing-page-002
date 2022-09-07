import logo from './logo.svg';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Menus from "./pages/Menus";
import Contact from "./pages/Contact";
import Chefs from "./pages/Chefs";
import Testimonial from "./pages/Testimonial";
import Services from "./pages/Services";
import PageNotFound from "./pages/PageNotFound";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

import './App.css';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="menu" element={<Menus />} />
          <Route path="chef" element={<Chefs />} />
          <Route path="testimonial" element={<Testimonial />} />
          <Route path="service" element={<Services />} />
          <Route path="contact" element={<Contact />} />

          {/* 👇️ only match this when no other routes match  */}
          {/* <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
      </Router>
      <BackToTop />
      <Footer />
    </>

  );
}

export default App;
