import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/actions/authAction";
//import { Redirect } from "react-router-dom";
const Register = () => {
  //const isRegister = useSelector((state) => state.authReducer.isRegister);
  //const isAuth = useSelector((state) => state.authReducer.isAuth);
  //const isLoading = useSelector((state) => state.authReducer.isLoading);
  const dispatch = useDispatch();
  const [formData, setForm] = useState({
    UserName: "",
    email: "",
    password: "",
  });
  const handleChange = (e) =>
    setForm({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(register(formData));
    //history.push("/login");
  };

  return (
    <React.Fragment>
      <div className="register-session">
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="register_container">
            <div className="form-header"></div>
            <input
              type="text"
              className="input_text"
              placeholder=" UserName"
              name="UserName"
              onChange={handleChange}
              required
            />
            <br />
            <input
              type="email"
              className="input_text"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              required
            />
            <br />
            <input
              type="password"
              className="input_text"
              placeholder="password"
              name="password"
              onChange={handleChange}
              required
            />
            <br />
            <input type="submit" value="Register" className="btn-register" />
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Register;
