import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  state = {
    name: "",
    role: "",
  };

  componentDidMount() {
    if (localStorage.getItem("token") === null) {
      //this.setState({visible:false});
    }

    this.setState({
      name: localStorage.getItem("name"),
      role: localStorage.getItem("role"),
    });
  }

  render() {
    const { name, role } = this.state;
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2 mb-3">
        <Link className="navbar-brand" to="/posts">
          XYZ
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse mr-auto" id="navbarNav">
          {name && (
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/posts">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/posts/created">
                  My Posts
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/posts/create">
                  Create Post
                </Link>
              </li>

              {role === "Administrator" && (
                <li className="nav-item">
                  <Link className="nav-link" to="/admin/posts/pending">
                    Pending Posts
                  </Link>
                </li>
              )}
            </ul>
          )}
        </div>

        <div className="">
          <ul className="navbar-nav">
            {name && (
              <React.Fragment>
                <li>
                  <Link className="nav-link text-warning" to="/posts">
                    {name}, You are logged in as {role}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-danger" to="/logout">
                    Logout
                  </Link>
                </li>
              </React.Fragment>
            )}

            {!name && (
              <React.Fragment>
                <li className="nav-item">
                  <Link className="nav-link text-danger" to="/logout">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-danger" to="/register">
                    Register
                  </Link>
                </li>
              </React.Fragment>
            )}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
