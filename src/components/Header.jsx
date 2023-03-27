import React from 'react';
import { NavLink } from 'react-router-dom';
import CartBtn from './buttons/CartBtn';

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid py-2">
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav nav-pills flex-row mb-auto">
              <li className="nav-item">
                <NavLink className="nav-link link-dark" aria-current="page" to="/">
                  <svg className="bi pe-none me-2" width="16" height="16"></svg>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link link-dark" to="/products">
                <svg className="bi pe-none me-2" width="16" height="16"></svg>
                  Product
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link link-dark" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link link-dark" to="/contact">Contact</NavLink>
              </li>
             
            </ul>
          <NavLink className="navbar-brand mx-auto fw-bold" to="/">YACHI'S APPLE STORE</NavLink>
          <ul className="navbar-nav nav-pills flex-row mb-auto">
            <li className="nav-item">
                  <NavLink className="nav-link link-dark" to="/login">Login</NavLink>
            </li>
            <li className="nav-item">
                  <NavLink className="nav-link link-dark" to="/register">Register</NavLink>
            </li>
            <li className="nav-item">
                  <NavLink className="nav-link link-dark" to="/create">Add Product</NavLink>
            </li>
            <li className="nav-item">
                  <NavLink className="nav-link link-dark" to="/logout">Logout</NavLink>
            </li>
          </ul>
          <CartBtn />
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header