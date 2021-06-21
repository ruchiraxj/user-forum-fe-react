import React, { Component } from "react";
import { Textarea } from "./Input";

class Comments extends Component {
  state = {
    post: { comment: "" },
  };

  handleChange = ({ currentTarget: input }) => {
    const post = { ...this.state.post };
    post[input.name] = input.value;
    this.setState({ post });
    console.log(this.state.post);
  };

  populateComments = (data) => {
    if (data.length < 1) {
      return "";
    }

    const comments = data.map((item) => {
      return (
        <div key={item.id}>
          <p>{item.comment}</p>
          <h6 className="blockquote-footer">
            Comment By <strong>{item.user.name}</strong> on: {item.created_at}
          </h6>
        </div>
      );
    });

    return comments;
  };


  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleCommentSave(this.state.post.comment);
  };

  render() {
    return (
      <React.Fragment>
        <hr className="mt-5" />
        <h5 className="mb-4 text-success">User Comments</h5>
        {this.populateComments(this.props.comments)}
        <form className="row mt-5" onSubmit={this.handleSubmit}>
          <div className="col-12">
            <Textarea
              name="comment"
              label="Add Your Comment"
              value={this.state.post.comment}
              onChange={this.handleChange}
            />
            <button className="btn btn-md btn-primary mb-3" type="submit">
              Add Comment
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default Comments;
