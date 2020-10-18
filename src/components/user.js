import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Spinner } from "reactstrap";
import isEmpty from "lodash/isEmpty";
function UserList(props) {
  return (
    <div>
      {isEmpty(props.users) ? (
        <div>
          <Spinner color="success" className="user_success" />
        </div>
      ) : (
        <div>
          <h1 className="text-center">Listing Users - {props.users.length}</h1>
          <ul>
            {props.users.map((user) => {
              return (
                <ListGroup key={user.id}>
                  <Link to={`/users/${user.id}`}>
                    <ListGroupItem>{user.name}</ListGroupItem>
                  </Link>
                </ListGroup>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};
export default connect(mapStateToProps)(UserList);
