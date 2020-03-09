import React from "react";
import { Link, NavLink } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import SignOutButton from "../SignOut";
import { AuthUserContext } from "../Session";
import * as ROLES from "../../constants/roles";

const Header = () => {
  return (
    <div>
      <AuthUserContext.Consumer>
        {authUser =>
          authUser ? <HeaderAuth authUser={authUser} /> : <HeaderNonAuth />
        }
      </AuthUserContext.Consumer>
    </div>
  );
};

const HeaderAuth = ({ authUser }) => {
  return (
    <div className="text-center">
      <nav className="navbar navbar-default space">
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            {!!authUser.roles[ROLES.ADMIN] && (
              <li className="nav-item">
                <Link to={ROUTES.ADMIN}>ADMIN</Link>
              </li>
            )}

            <li>
              <Link to={ROUTES.HOME}>Home</Link>
            </li>
            <li id="signoutbutton">
              <SignOutButton />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

const HeaderNonAuth = () => {
  return (
    <div className="text-center">
      <nav className="navbar navbar-default space">
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li className="nav-item">
              <Link to={ROUTES.LOGIN}>Login</Link>
            </li>
            <li className="nav-item">
              <Link to={ROUTES.SIGN_UP}>SignUp</Link>
            </li>
            <li>
              <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
