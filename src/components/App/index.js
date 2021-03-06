import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { withFirebase } from "../Firebase";

import Navigation from "../Navigation";
import LandingPage from "../Landing";
import SignUpPage from "../SignUp";
import SignInPage from "../SignIn";
import PasswordForgetPage from "../PasswordForget";
import HomePage from "../Home";
import AccountPage from "../Account";
import AdminPage from "../Admin";
import * as ROUTES from "../../constants/routes";
import { AuthUserContext } from "../Session";
import { withAuthentication } from "../Session";
import LogInPage from "../Login";
import Header from "../Header/Header";

const App = () => (
  <div>
    <h1 style={{ fontFamily: "Pacifico" }} className="lead">
      Welcome to Firebase-React Authentication
    </h1>
    <LogInPage />
  </div>
);

export default withAuthentication(App);

/* class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authUser: null
    };
  }

  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUser: authUser })
        : this.setState({ authUser: null });
    });
  }

  componentWillUnmount() {
    this.listener();
  }

  render() {
    return (
      <AuthUserContext.Provider value={this.state.authUser}>
        <Router>
          <div>
            <Navigation authUser={this.state.authUser} />

            <hr />

            <Route exact path={ROUTES.LANDING} component={LandingPage} />
            <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
            <Route path={ROUTES.SIGN_IN} component={SignInPage} />
            <Route
              path={ROUTES.PASSWORD_FORGET}
              component={PasswordForgetPage}
            />
            <Route path={ROUTES.HOME} component={HomePage} />
            <Route path={ROUTES.ACCOUNT} component={AccountPage} />
            <Route path={ROUTES.ADMIN} component={AdminPage} />
          </div>
        </Router>
      </AuthUserContext.Provider>
    );
  }
}

export default withFirebase(App); */
