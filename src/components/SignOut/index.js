import React from "react";
import { withFirebase } from "../Firebase";

const SignOut = ({ firebase }) => (
  <button type="button" onClick={firebase.doSignOut}>
    SignOut
  </button>
);

const SignOutButton = withFirebase(SignOut);

export default SignOutButton;
