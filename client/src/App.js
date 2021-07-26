import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/authForm/Login";
import Register from "./components/authForm/Register";
import AddPost from "./components/Post/AddPost";
import ListPost from "./components/Post/ListPost";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar/Navbar";
import PostPage from "./components/Post/PostPage";
import PrivateRoute from "./components/privateRoute";
import { getAuthUser } from "./redux/actions/authAction";

import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAuthUser());
  }, [dispatch]);
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute exact path="/addPost" component={AddPost} />
        <Route exact path="/blog" component={ListPost} />
        <Route exact path="/blog/post/:postId" component={PostPage} />
      </Switch>
    </Router>
  );
}

export default App;
