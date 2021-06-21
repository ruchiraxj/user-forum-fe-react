import "./App.css";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import React from "react";
import { ToastContainer } from 'react-toastify';
import PostView from './components/PostView';
import Nav from './components/Nav';
import Home from './components/Home';
import MyPosts from './components/MyPosts';
import Logout from "./components/Logout";
import CreatePost from "./components/CreatePost";
import Pending from "./components/Admin/Pending";

function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <Nav />

      <div className="container">
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/logout" component={Logout}></Route>
          <Route path="/register" component={Register}></Route>

          <Route path="/admin/posts/pending" component={Pending}></Route>
          
          <Route path="/posts/created" component={MyPosts}></Route>
          <Route path="/posts/create" component={CreatePost}></Route>
          <Route path="/posts/:id" component={PostView}></Route>
          <Route path="/posts" component={Home}></Route>
          <Route path="/" component={Login}></Route>


        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
