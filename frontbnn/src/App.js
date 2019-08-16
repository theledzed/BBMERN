import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import Landing from "../src/components/Landing";
import Login from "../src/components/login";
import WrappedRegister from "../src/components/Register";
import Profile from "../src/components/Profile";
import WrappedDashboard from "../src/components/addMovies"

class App extends Component{
  render() {
    return (
      <Router>
        <div>
       <Navbar />
          <Route exact path="/" component={Landing} />
          <div>
            <Route exact path="/register" component={WrappedRegister} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/addmovies" component={WrappedDashboard} />
            
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
