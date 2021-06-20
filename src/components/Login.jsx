import logo from "../logo.svg";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Input } from "./Input";
import {login} from "../services/authService";

class Login extends Component {
  state = {
    account: { email: "", password: "" },
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.loginUser();
  };

  //API call to fetch categories
  async loginUser() {
    try {
      const response = await login(this.state.account.email, this.state.account.password);

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("name", response.data.name);
      localStorage.setItem("role", response.data.role.name);

      window.location = "/";
    } catch (ex) {
      if(ex.response && ex.response.status === 401){

      }
    }
  }

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-lg-4">
          <form onSubmit={this.handleSubmit}>
            <img
              className="mb-4"
              src={logo}
              alt=""
              width="72"
              height="57"
            ></img>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

            <Input
              name="email"
              type="text"
              label="Email Address"
              value={this.state.email}
              onChange={this.handleChange}
            />

            <Input
              name="password"
              type="password"
              label="Password"
              value={this.state.password}
              onChange={this.handleChange}
            />

            <button className="w-100 btn btn-lg btn-primary mb-3" type="submit">
              Sign in
            </button>

            <Link to="/register" className="">
              Don't have an Account? Click here to Register
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
