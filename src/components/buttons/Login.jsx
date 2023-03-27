import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <>
        <div className="container">
        <h1>Login</h1>
            <div className="col-md-6">
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="***********" />
                    </div>
                    <button type="submit" className="btn btn-outline-primary w-100 mt-3">Login</button>
                    <NavLink to="/register" className="btn btn-outline-primary ms-auto mt-3"> Click here to Register </NavLink>
                </form>
            </div>
        </div>
    </>
  )
}

export default Login