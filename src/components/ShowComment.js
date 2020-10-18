import React from "react";
import { connect } from "react-redux";
import { startGetPostData, resetPostData } from "../actions/postData";
import { ListGroup, ListGroupItem, Spinner } from "reactstrap";
import isEmpty from "lodash/isEmpty";

class ShowComment extends React.Component {
  constructor() {
    super();
  }
  componentWillUnmount() {
    this.props.dispatch(resetPostData());
  }

  render() {
    console.log("comments - ", this.props);
    const id = this.props.match.params.id;
    if (Object.keys(this.props.postData).length == 0) {
      this.props.dispatch(startGetPostData(id));
    }
    return (
      <div className="container">
        <h1 className="text-center m-4">Blog View</h1>
        <div className="row">
          <div className="offset-2 col-md-8">
            {Object.keys(this.props.postData).length == 0 ? (
              <div>
                <Spinner color="success" className="comment_success" />
              </div>
            ) : (
              <div className="comment_card">
                <div className="comment_info">
                  <h4>Title : {this.props.postData.post.title}</h4>
                  <p className="post_body">
                    Body : {this.props.postData.post.body}
                  </p>
                  <p className="posted_by">
                    Posted by : {this.props.postData.userData.name}
                  </p>
                  <hr />
                </div>
                <ul>
                  {this.props.postData.commentsData.map((comment) => {
                    return (
                      <ListGroup key={comment.id}>
                        <ListGroupItem className="comment_list">
                          {comment.body}
                        </ListGroupItem>
                      </ListGroup>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    postData: state.postData,
  };
};
export default connect(mapStateToProps)(ShowComment);
