import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="nav-wrapper">
      <a href="#print">
        <span className="products">3d Printing</span>
      </a>
      <a href="#pin">
        <span className="products">Pinholes</span>
      </a>
      <a href="#bar">
        <span className="products">Bar Phantoms</span>
      </a>
      <a href="#lead">
        <span className="products">Lead Casting</span>
      </a>
      <a href="#mech">
        <span className="products">Design</span>
      </a>
      <a href="#con">
        <span className="products">Contact</span>
      </a>
    </div>
  );
};

export default Navbar;
