import React from "react";
import { Link } from 'react-router-dom'
import logo from "../images/logo.png";

import GoogleAuth from  './GoogleAuth'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg nav-ba">
      <Link className="navbar-brand" to='/'>
        <img src={logo} alt="logo" className="logo" />
      </Link>
      <button
      className="navbar-toggler btn"
      type="button"
      data-toggle="collapse"
      data-target="#navbarTogglerDemo03"
      aria-controls="navbarTogglerDemo03"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav navbar-left mr-auto mt-2 mt-lg-0">
          
          <li className="nav-item">
            <Link className="nav-link" to="/">
              الرئيسية
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/events">
              الفعاليات
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#">
              إنجازاتنا
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#">
              منتجات سرادق
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#">
              تواصل معنا
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#">
              الانضمام لفريق العمل
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#">
                <GoogleAuth/>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
