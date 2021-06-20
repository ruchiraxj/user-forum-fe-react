import React, { Component } from "react";
import Posts from "../Posts";
import { pendingPosts, changePostStatus } from "../../services/postsService";
import {toast} from "react-toastify";


class Pending extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    this.getPosts();
  }
  //API call to fetch categories
  async getPosts() {
    try {
      const p = await pendingPosts();
      this.setState({ posts: p.data });
    } catch (ex) {}
  }


  //API call to approve/reject posts
  async changeStatus(id, status) {
    try {
      const stat = await changePostStatus(id, status);
      if(!stat.data.status){
        toast.error("System failed execute this action");
      }else{
        if(status === 1){
            toast.success("Post approved successfully");
        }else{
            toast.warning("Post rejected successfully");
        }
        this.getPosts();
      }      
    } catch (ex) {
      if(ex.response && ex.response.status === 403){
        toast.error("You don't have permissin to execute this action");
      }else{
        toast.error("Something went wrong when trying execute this action");
      }
      
    }
  }

  handleApprove = (id) => {
    this.changeStatus(id, 1);
  };

  handleReject = (id) => {
    this.changeStatus(id, 2);
  };


  render() {
    return (
      <React.Fragment>
        <h1 className="page-heading">Pending Posts</h1>
        <Posts
          posts={this.state.posts}
          showApprove="true"
          onApprove={this.handleApprove}
          showReject="true"
          onReject={this.handleReject}
        />
      </React.Fragment>
    );
  }
}

export default Pending;
