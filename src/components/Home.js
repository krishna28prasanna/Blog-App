import React from "react";
import UserList from "./user";
import "../App.css";
function Home() {
  return (
    <div className="mt-4">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="description">
              <h4>Description</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
          <div className="col-md-5">
            <div className="user_top">
              <UserList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
