import React from "react";
import UserList from "./user";
function DisplayUser() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <UserList />
          </div>
        </div>
      </div>
    </div>
  );
}
export default DisplayUser;
