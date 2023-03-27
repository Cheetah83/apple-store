import React from 'react';
import { NavLink } from 'react-router-dom';

const Register = () => {
  return (
    <>
    <div className="container">
            <h1>Register</h1>
          <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInput" className="form-label">Username</label>
              <input type="username" className="form-control" id="username" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" />
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" />
            </div>
            <button type="submit" className="btn btn-outline-primary w-100 mt-3">Register</button>
            <NavLink to="/login" className="btn btn-outline-primary ms-auto mt-3"> Click here to Login </NavLink>
          </form>
          </div>
    </div>
  </>
  )
}

export default Register