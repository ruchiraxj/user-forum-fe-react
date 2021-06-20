import React, { Component } from "react";
import Posts from "./Posts";
import { myPosts, deletePost } from "../services/postsService";
import {toast} from "react-toastify";

class MyPosts extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    this.getPosts();
  }
  
  //API call to Delete a Post
  async deletePost(id) {
    try {
      const stat = await deletePost(id);
      if(!stat.data.status){
        toast.error("System failed to delete the post");
      }else{
        toast.success("Post deleted successfully");
        this.getPosts();
      }      
    } catch (ex) {
      if(ex.response && ex.response.status === 403){
        toast.error("You don't have permissin to delete this Post");
      }else{
        toast.error("Something went wrong when trying to delete the post");
      }
      
    }
  }

  handleDelete = (id) => {
    this.deletePost(id);
  };
  //API call to fetch categories
  async getPosts() {
    try {
      const p = await myPosts();
      this.setState({ posts: p.data });
    } catch (ex) {}
  }

  render() {
    return (
      <React.Fragment>
        <h1 className="page-heading">My Posts</h1>
      <Posts
        posts={this.state.posts}
        showDelete="true"
        onDelete={this.handleDelete}
      />
      </React.Fragment>
    );
  }
}

export default MyPosts;
