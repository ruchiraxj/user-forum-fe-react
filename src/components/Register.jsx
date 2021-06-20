import logo from "../logo.svg";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { UserRegister } from "../services/userService";
import { Input } from "./Input";
import {toast} from "react-toastify";


class Register extends Component {
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
    this.registerUser();
  };

  //API call to fetch categories
  async registerUser() {
    try {
      await UserRegister(
        this.state.account.name,
        this.state.account.email,
        this.state.account.password,
        this.state.account.passwordConfirm
      );
      
      toast.success("Successfully Registered. Please login");
      this.props.history.push('/login');
      //window.location = "/";

    } catch (ex) {
      console.log("error", ex);
    }
  }

  state = {};
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
            <h1 className="h3 mb-3 fw-normal">Register New Account</h1>

            <Input
              name="name"
              type="text"
              label="Full Name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <Input
              name="email"
              type="email"
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
            <Input
              name="passwordConfirm"
              type="password"
              label="Re-Enter Password"
              value={this.state.passwordConfirm}
              onChange={this.handleChange}
            />

            <button className="w-100 btn btn-lg btn-primary mb-3" type="submit">
              Register
            </button>

            <Link to="/login" className="">
              Already Registered ? Click here to Login
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
