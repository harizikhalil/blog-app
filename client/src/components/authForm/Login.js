import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../redux/actions/authAction";
import userIcon from "../../img/user-icon.jpg";
import "./authform.css";
const Login = ({ history }) => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const [formData, setForm] = useState({
    UserName: "",
    password: "",
  });

  const handleChange = (e) =>
    setForm({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login(formData));
    history.push("/blog");
  };

  if (isAuth) {
    return <Redirect to="/blog" />;
  }
  return (
    <React.Fragment>
      <div className="form-session">
        <div className="form_container">
          <img src={userIcon} alt="icon-user" />
          <form className="form-body" onSubmit={handleSubmit}>
            <div className="form-header"></div>
            <input
              type="text"
              className="input_text"
              placeholder="UserName"
              name="UserName"
              value={formData.UserName}
              onChange={handleChange}
              required
            />
            <br />
            <input
              type="password"
              className="input_text"
              placeholder="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <br />
            <input type="submit" value="Login" className="btn-form" />
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
