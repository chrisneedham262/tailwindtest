import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import Home from "./containers/Home";
import Dashboard from "./containers/dashboard";
import Login from "./containers/Login";
import About from "./containers/about";
import Signup from "./containers/Signup";
import Contact from "./containers/Contact";
import Pricing from "./containers/Pricing";
import Profile from "./containers/Profile";
import Privacy from "./containers/Privacy";
import Calendar from "./containers/Calendar";
import Activate from "./containers/Activate";
import AddUsers from "./containers/AddUsers";
import Notifications from "./containers/Notifications";
import Pitches from "./containers/Pitches";
import Press from "./containers/press";
import Drafts from "./containers/Drafts";
import Contacts from "./containers/Contacts";
import HowItWorks from "./containers/HowItWorks";
import PressAll from "./containers/PressAll";
import ResetPassword from "./containers/ResetPassword";
import ResetPasswordConfirm from "./containers/ResetPasswordConfirm";

import { Provider, useDispatch, useSelector } from "react-redux";

import Layout from "./hocs/Layout";
import AllContacts from "./components/AllContacts";
import { Component } from "react";
import { load_user } from "./actions/auth";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const auth = localStorage.getItem("isAuthenticated");
  if (auth) {
    return <Route {...rest} render={(props) => <Component {...props} />} />;
  } else {
    return <Redirect to={{ pathname: "/login" }} />;
  }
};

//basketba11
const App = () => {
  const dispatch = useDispatch(); // mapStateToProps (hooks)
  // const user = useSelector(({ auth = {} }) => auth.user || {}); // mapDispatchToProp
  // // const user = {};
  useEffect(() => {
    dispatch(load_user());
  }, []);

  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          {/* <Route exact path="/dashboard" component={Dashboard} /> */}
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/pricing" component={Pricing} />
          <Route exact path="/about" component={About} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/press" component={Press} />
          <Route exact path="/drafts" component={Drafts} />
          <Route exact path="/privacy" component={Privacy} />
          <Route exact path="/add-users" component={AddUsers} />
          <Route exact path="/notifications" component={Notifications} />
          <Route exact path="/pitches" component={Pitches} />
          <Route exact path="/calendar" component={Calendar} />
          <Route exact path="/how-it-works" component={HowItWorks} />
          <Route exact path="/contacts" component={Contacts} />
          <Route exact path="/press-all" component={PressAll} />
          <Route exact path="/reset-password" component={ResetPassword} />
          <Route
            exact
            path="/password/reset/confirm/:uid/:token"
            component={ResetPasswordConfirm}
          />
          <Route exact path="/activate/:uid/:token" component={Activate} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
