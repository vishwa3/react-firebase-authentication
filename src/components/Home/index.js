import React from "react";
import { withAuthorization } from "../Session";

const HomePage = () => (
  <div>
    <h1 style={{ fontFamily: "Pacifico" }} className="lead">
      Home Page
    </h1>
    <p style={{ fontFamily: "Pacifico" }} className="lead">
      The Home Page is accessible by every signed in user.
    </p>
  </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);
