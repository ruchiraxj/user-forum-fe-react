import React, { Component } from "react";
import { viewPost } from "../services/postsService";

class PostView extends Component {
  state = {
    post: [],
    postId: 0,
  };

  componentWillMount() {
    this.setState({ postId: this.props.match.params.id });
  }

  componentDidMount() {
    this.viewPost();
  }

  //API call to fetch categories
  async viewPost() {
    try {
      const p = await viewPost(this.state.postId);
      this.setState({ post: p.data });
    } catch (ex) {}
  }

  render() {
    if (this.state.post.length === 0) {
      return 1;
    }

    let { title, description, created_at, product, user } = this.state.post;
    return (
        <div className="row">
          <div className="col-md-9">
            <h1>{title}</h1>
            <h6>Posted By: {user.name}</h6>
            <h6>Date: {created_at}</h6>
            <p className="mt-5">{description}</p>
          </div>
          <div className="col-md-3">
            <h4>{product.name}</h4>
            <img src={product.image} alt="..." />
          </div>
        </div>
    );
  }
}

export default PostView;
