import React from "react";
import { connect } from "react-redux";
import { findUser } from "../selectors/User";
import { findPost } from "../selectors/Post";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Spinner } from "reactstrap";
import isEmpty from "lodash/isEmpty";

function ShowPost(props) {
  return (
    <div>
      <h1 className="section1_h1">User Profile</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="profile_card">
              {props.users ? (
                <div className="profile_info">
                  <p>{props.users.name}</p>
                  <p>{props.users.email}</p>
                  <p>Phone : {props.users.phone}</p>
                  <p>
                    Company :
                    {Object.keys(props.users).length > 0 &&
                      props.users.company.name}
                  </p>
                  <p>
                    City :
                    {Object.keys(props.users).length > 0 &&
                      props.users.address.city}
                  </p>
                </div>
              ) : (
                <div>
                  <Spinner color="success" className="show_user_success" />
                </div>
              )}
            </div>
          </div>
          <div className="col-md-8">
            <ul>
              {isEmpty(props.posts) ? (
                <div>
                  <Spinner color="success" className="show_user_success" />
                </div>
              ) : (
                props.posts.map((post) => {
                  return (
                    <ListGroup key={post.id}>
                      <Link to={`/posts/${post.id}`}>
                        <ListGroupItem>{post.title}</ListGroupItem>
                      </Link>
                    </ListGroup>
                  );
                })
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  return {
    users: findUser(state.users, id),
    posts: findPost(state.posts, id),
  };
};
export default connect(mapStateToProps)(ShowPost);
