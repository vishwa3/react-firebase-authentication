import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Firebase, { FirebaseContext } from "./components/Firebase";

import SignUpPage from "./components/SignUp";
import Header from "./components/Header/Header";
import * as ROUTES from "./constants/routes";
import LogInPage from "./components/Login";
import PasswordForgetPage from "./components/PasswordForget";
import HomePage from "./components/Home";
import { withAuthentication } from "./components/Session";
import AdminPage from "./components/Admin";

const Head = withAuthentication(Header);
ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <Router>
      <Head />
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path={ROUTES.LOGIN} component={LogInPage} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.HOME} component={withAuthentication(HomePage)} />
        <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
        <Route path={ROUTES.ADMIN} component={withAuthentication(AdminPage)} />
      </Switch>
    </Router>
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
