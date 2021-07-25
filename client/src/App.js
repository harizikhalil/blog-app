import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/authForm/Login";
import Register from "./components/authForm/Register";
import AddPost from "./components/Post/AddPost";
import ListPost from "./components/Post/ListPost";
import HomePage from "./components/HomePage";
import { getAuthUser } from "./redux/actions/authAction";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  // const isLoading = useSelector((state) => state.authReducer.isLoading);

  useEffect(() => {
    dispatch(getAuthUser());
  }, [dispatch]);
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/addPost" component={AddPost} />
        <Route path="/blog" component={ListPost} />
      </Switch>
    </Router>
  );
}

export default App;
