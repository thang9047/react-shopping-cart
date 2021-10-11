import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../css/login.css'


export class Register extends Component {
  render() {
    return (
      <div className="login_page">
      <form>
      <h2>Register</h2>
        <input
          type="text"
          name="name"
          required
          placeholder="Name"
        />
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
          <button type="submit">Register</button>
          <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
    )
  }
}

export default Register
