import React, { Component } from "react";
import { viewPost } from "../services/postsService";
import Comments from "./Comments";
import {getComments, saveComments} from "../services/CommentsService";
import {toast} from "react-toastify";

class PostView extends Component {
  state = {
    post: [],
    postId: 0,
    comments:[]
  };

  componentWillMount() {
    this.setState({ postId: this.props.match.params.id });
  }

  componentDidMount() {
    this.viewPost();
    this.getComments();
  }

  //API call to fetch comments
  async getComments() {
    try {
      const p = await getComments(this.state.postId);
      this.setState({ comments: p.data });
    } catch (ex) {}
  }
  
  //API call to Save Comment
  async saveComments(comment, post) {
    try {
      const v = {comment: comment, post: post};
      await saveComments(v);
      this.getComments();
      
    } catch (ex) {
      toast.error("Failed to save comment");
    }
  }

  //API call to fetch posts
  async viewPost() {
    try {
      const p = await viewPost(this.state.postId);
      this.setState({ post: p.data });
    } catch (ex) {}
  }

  handleCommentSave = (comment) =>{
    console.log(comment);
    this.saveComments(comment, this.state.postId);
  }

  render() {
    if (this.state.post.length === 0) {
      return 1;
    }

    let { title, description, created_at, product, user } = this.state.post;
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-9">
            <h1>{title}</h1>
            <h6>Posted By: {user.name}</h6>
            <h6>Date: {created_at}</h6>
            <p className="mt-5">{description}</p>

            <Comments comments={this.state.comments} handleCommentSave={this.handleCommentSave}/>
          </div>
          <div className="col-md-3">
            <h4>{product.name}</h4>
            <img src={product.image} alt="..." />
          </div>
        </div>
        </React.Fragment>
    );
  }
}

export default PostView;
