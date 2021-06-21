import React, { Component } from "react";
import Posts from "./Posts";
import { getPosts, searchPosts } from "../services/postsService";


class Home extends Component {
  state = {
    posts: [],
    search: {"search_key" : ""}
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
  //API call to fetch categories
  async searchPosts(key) {
    try {
      const p = await searchPosts(key);
      this.setState({ posts: p.data });
    } catch (ex) {
      this.setState({ posts: [] });

    }
  }

  handleChange = ({ currentTarget: input }) => {
    const search = { ...this.state.search };
    search[input.name] = input.value;
    this.setState({ search });
    console.log(this.state.search);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.searchPosts(this.state.search.search_key);
  };
  

  render() {
    return (
      <React.Fragment>
        <h1 className="page-heading">Latest Posts</h1>

        <form className="row" onSubmit={this.handleSubmit}>
          <div className="col-md-5">
          <div className="input-group mb-3">
            <input id="search_key" name="search_key" value={this.state.search.search_key} onChange={this.handleChange} type="text" className="form-control" placeholder="Search Posts" aria-label="Search Posts" aria-describedby="button-addon2"/>
            <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Search Posts</button>
          </div>
          </div>
        </form>

        <Posts posts={this.state.posts}/>
      </React.Fragment>
    );
  }
}

export default Home;
