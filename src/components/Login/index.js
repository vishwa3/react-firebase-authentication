import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { compose } from "recompose";

import { SignUpLink } from "../SignUp";
import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";
import { PasswordForgetLink } from "../PasswordForget";
import "../../styles/style.css";
const LogInPage = () => (
  <div>
    <LogInForm />
  </div>
);

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null
};

class LogInFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  onSubmit = event => {
    const { email, password } = this.state;
    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
  };
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const { email, password, error } = this.state;
    const isInvalid = password === "" || email === "";
    return (
      <div className="loginbox">
        <img src={require("./avatar.png")} className="avatar"></img>
        <h1>Login Here</h1>
        <form onSubmit={this.onSubmit}>
          <p>Email</p>
          <input
            name="email"
            value={email}
            onChange={this.onChange}
            type="text"
            placeholder="Email Address"
          />
          <p>Password</p>
          <input
            name="password"
            value={password}
            onChange={this.onChange}
            type="password"
            placeholder="Password"
          />

          <button disabled={isInvalid} type="submit">
            Sign In
          </button>
          <p>
            {" "}
            <Link to={ROUTES.PASSWORD_FORGET} className="link">
              Forgot Password?
            </Link>
          </p>
          <p>
            <Link to={ROUTES.SIGN_UP} className="link">
              {" "}
              Don't have an account? Sign Up
            </Link>
          </p>
          {error && <p>{error.message}</p>}
        </form>
      </div>
    );
  }
}
const LogInForm = compose(withRouter, withFirebase)(LogInFormBase);
export default LogInPage;
export { LogInForm };
