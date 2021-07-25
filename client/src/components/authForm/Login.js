import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/authAction";

const Login = () => {
  const dispatch = useDispatch();
  const [formData, setForm] = useState({
    UserName: "",
    password: "",
  });

  const handleChange = (e) =>
    setForm({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // login

    dispatch(login(formData));
    //redirect to dashboard
    // history.push("/dashboard");
  };

  /*if (isAuth) {
    return <Redirect to="/dashboard" />;
  }*/
  return (
    <React.Fragment>
      <div className="login-session">
        <div className="contact_container">
          <form className="login-form" onSubmit={handleSubmit}>
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
            <input type="submit" value="Login" className="btn" />
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
