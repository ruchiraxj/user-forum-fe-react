import React, { Component } from "react";
import Posts from "./Posts";
import { getPosts } from "../services/postsService";


class Home extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    this.getPosts();
  }

  //API call to fetch categories
  async getPosts() {
    try {
      const p = await getPosts();
      this.setState({ posts: p.data });
    } catch (ex) {}
  }

  render() {
    return (
      <React.Fragment>
        <h1 className="page-heading">Latest Posts</h1>
        <Posts posts={this.state.posts}/>
      </React.Fragment>
    );
  }
}

export default Home;
