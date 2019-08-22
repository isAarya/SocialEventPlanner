import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import CreateSocialEvent from "./components/create-socialevent.component";
import EditSocialEvent from "./components/edit-socialevent.component";
import SocialEventList from "./components/socialevent-list.component";
import DeleteSocialEvent from "./components/delete-socialevent.component";

import logo from "./logo.svg";

function App() {
  return (
    <Router>

      <div className="container">

        <nav className="navbar navbar-expand-lg navbar-light bg-light">

          {/* <a class="navbar-brand" href="https://codingthesmartway.com" target="_blank">
            <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com"/>
          </a> */}

          <Link to="/" className="navbar-brand">DFG Social Event App</Link>

          <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                  <li className="navbar-item">
                      <Link to="/" className="nav-link">Events</Link>
                  </li>
                  <li className="navbar-item">
                      <Link to="/create" className="nav-link">Create Social Event</Link>
                  </li>
              </ul>
          </div>
        </nav>

        <br/>
        <Route path="/" exact component={SocialEventList}/>
        <Route path="/edit/:id" component={EditSocialEvent}/>
        <Route path="/create" component={CreateSocialEvent}/>
        <Route path="/delete/:id" component={DeleteSocialEvent}/>
      </div>

    </Router>
  );
}

export default App;
