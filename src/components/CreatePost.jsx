import React, { Component } from "react";
import { Input, Textarea, Select} from "./Input";
import {toast} from "react-toastify";
import {getProducts} from '../services/productsService';
import {createPost} from '../services/postsService';

class CreatePost extends Component {
  state = {
    post: { title: "", description: "", product: ""},
    products: [],
  };

  componentDidMount(){
    this.getProductsList();
  }

  async getProductsList(){
    try {
      const { data } =  await getProducts();
      this.setState({ products: data });
      console.log(data);
    } catch (ex) {}
  }
  
  async saveNewPost(){
    try {
      await createPost(this.state.post);
      toast.success("New post created successfully")
    } catch (ex) {
      if(ex.response && ex.response.status === 422){
        toast.error(ex.response.data.message);
      }
    }
  }

  handleChange = ({ currentTarget: input }) => {
    const post = { ...this.state.post };
    post[input.name] = input.value;
    this.setState({ post });
    console.log(this.state.post);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.saveNewPost();
  };

  render() {
    return (
      <React.Fragment>
        <h1 className="page-heading">Create New Post</h1>

        <div className="row justify-content-center">
        <div className="col-lg-12">
        <form onSubmit={this.handleSubmit}>
            <Input
              name="title"
              type="text"
              label="Title"
              value={this.state.title}
              onChange={this.handleChange}
            />
            <Textarea
              name="description"
              label="Description"
              value={this.state.description}
              onChange={this.handleChange}
            />

            <Select
              name="product"
              label="Select Product"
              values={this.state.products}
              onChange={this.handleChange}
            />
            

            <button className="w-100 btn btn-lg btn-primary mb-3" type="submit">
              Save
            </button>
          </form>
        </div>
      </div>

      </React.Fragment>
    );
  }
}

export default CreatePost;
