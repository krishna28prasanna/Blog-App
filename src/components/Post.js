import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Spinner } from "reactstrap";
import isEmpty from "lodash/isEmpty";
function PostList(props) {
  return (
    <div>
      {isEmpty(props.posts) ? (
        <div>
          <Spinner color="success" className="post_success" />
        </div>
      ) : (
        <div>
          <h1 className="text-center m-4">
            Post Listing - {props.posts.length}
          </h1>
          <div className="container">
            <div className="row">
              <div className="offset-2 col-md-8">
                <ul>
                  {props.posts.map((post) => {
                    return (
                      <ListGroup key={post.id}>
                        <Link to={`/posts/${post.id}`}>
                          <ListGroupItem>{post.title}</ListGroupItem>
                        </Link>
                      </ListGroup>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};
export default connect(mapStateToProps)(PostList);
