import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import DisplayUser from "./components/user";
import PostList from "./components/Post";
import ShowPost from "./components/ShowPost";
import ShowComment from "./components/ShowComment";
import Header from "./components/Header";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route path="/" component={Home} exact={true} />
        <Route path="/users" component={DisplayUser} exact={true} />
        <Route path="/posts" component={PostList} exact={true} />
        <Route path="/posts/:id" component={ShowComment} />
        <Route path="/users/:id" component={ShowPost} />
      </div>
    </BrowserRouter>
  );
}
export default App;
