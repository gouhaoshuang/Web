import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class NavBar extends Component {
    state = {  } 
    render() { 
        return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">讲义</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className = "nav-link" to = "/Home">Home</Link>
              <Link className = "nav-link" to = "/Linux">Linux</Link>
              <Link className = "nav-link" to = "/Django">Django</Link>
              <Link className = "nav-link" to = "/Web">Web</Link>
            </div>
          </div>
        </div>
      </nav>
      );
    }
}
 
export default NavBar;