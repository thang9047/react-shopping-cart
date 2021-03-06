import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../css/login.css'


export class Login extends Component {
  render() {
    return (
      <div className="login_page">
      <form>
        <h2>Login</h2>
        <input
          type="email"
          name="email"
          required
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          required
          autoComplete="on"
          placeholder="Password"
        />
        <div className="row">
          <button type="submit">Login</button>
          <Link to="/register">Register</Link>
        </div>
      </form>
    </div>
    )
  }
}

export default Login
