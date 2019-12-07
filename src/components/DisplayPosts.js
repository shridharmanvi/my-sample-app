import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postsActions";

class DisplayPosts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const postItems = this.props.posts.map(post => (
      <div key={post.id}>
        <h4>{post.title}</h4>
        <p>{post.title}</p>
      </div>
    ));
    return (
      <div >
        <h2> Here are a list of posts</h2>
        {postItems}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.items
});

export default connect(mapStateToProps, { fetchPosts })(DisplayPosts);
