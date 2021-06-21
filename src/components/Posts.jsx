import { Component } from "react";
import {Link} from "react-router-dom";

class Posts extends Component {
  state = {
    posts: [],
  };

  render() {
    const {posts, showDelete, onDelete, showApprove, onApprove, showReject, onReject} = this.props;
   
    if (posts.length === 0) {
      return <h5>No Posts Available!</h5>;
    }

    const list = posts.map(function (item) {
        let url = "/posts/" + item.id;
      return (
        <div className="card mb-3" key={item.id}>
          <div className="row g-0">
            {/* <div className="col-3">
              <img src={item.product.image} alt="..."/>
            </div> */}
            <div className="col-12">
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description.substring(0, 150)}...</p>
                <p className="card-text">
                  <small className="text-muted">Created By: {item.user.name}</small><br/>
                  <small className="text-muted">Created On: {item.created_at}</small>
                </p>

                <Link to={url} className="btn btn-sm btn-warning post-act-btn">View Post</Link>
                
                {showDelete && (
                  <button className="btn btn-sm btn-danger post-act-btn" onClick={()=> onDelete(item.id) }>Delete Post</button>)
                }
                
                {showApprove && (
                  <button className="btn btn-sm btn-success post-act-btn" onClick={()=> onApprove(item.id) }>Approve Post</button>)
                }
                
                {showReject && (
                  <button className="btn btn-sm btn-danger post-act-btn" onClick={()=> onReject(item.id) }>Reject Post</button>)
                }

                {item.status===0 &&(
                  <span className="text-danger float-me-right post-act-btn"><strong>Pending Approval</strong></span>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    });

    return list;
  }
}

export default Posts;
