import React from "react";
import { connect } from "react-redux";

import { fetchPosts } from "../actions";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  render() {
    const renderedPosts = this.props.posts.map((post) => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          </div>
        </div>
      );
    });

    return <div className="ui relaxed divided list">{renderedPosts}</div>;
  }
}

function mapStateToProps({ posts }) {
  return { posts: posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostList);
