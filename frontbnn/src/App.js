import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import Landing from "../src/components/Landing";
import Login from "../src/components/login";
import WrappedRegister from "../src/components/Register";
import Profile from "../src/components/Profile";
import WrappedDashboard from "../src/components/addMovies";
import jwt_decode from "jwt-decode";

class App extends Component {
  state = {
    userAdmin: null
  };

  componentWillMount() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);

    this.setState({
      userAdmin: decoded.userAdmin
    });
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div>
            <Route exact path="/register" component={WrappedRegister} />
            <Route exact path="/login" component={Login} />
            {this.state.userAdmin === true ? (
              <Route exact path="/profile" component={Profile} />
            ) : null}
            <Route exact path="/addmovies" component={WrappedDashboard} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
