import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import About from "../pages/About";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { UserContext } from "../context/UserContext";

const Section = () => {
  const [user] = useContext(UserContext);

  const PrivateRoute = ({ user, ...props }) => {
    if (user) {
      return <Route {...props} />;
    } else {
      return <Redirect to="/login" />;
    }
  };

  const LoginRoute = ({ user, ...props }) =>
    user ? <Redirect to="/" /> : <Route {...props} />;

  return (
    <>
      <Switch>
        <LoginRoute exact path="/login" user={user} component={Login} />
        <Route exact path="/register" user={user} component={Register} />
      </Switch>
      <section>
        <Switch>
          <Route exact path="/" user={user} component={Home} />
          <Route exact path="/about" user={user} component={About} />
          <PrivateRoute exact path="/movies" user={user} component={Movies} />
        </Switch>
      </section>
    </>
  );
};

export default Section;