import React, { Component } from 'react'

class Navigation extends Component {

	render() {

		return (

<header id="js-navbar" className="navbar navbar-default navbar-fixed-top navbar-transparent" role="banner">
  <div className="container">

    <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="sidepanel" data-target="#navbar-nav">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
      
      <a className="navbar-brand" href="#"><span className="navbar-logo">Spotify</span></a>
    </div>

  <nav className="collapse navbar-collapse" id="navbar-nav" role="navigation">
        
    <ul className="nav navbar-nav navbar-right nav-main">
      <li ><a href="https://www.spotify.com/uk/premium/">Premium</a></li>
      <li ><a href="https://support.spotify.com/uk/">Help</a></li>
      <li ><a href="https://www.spotify.com/uk/download/">Download</a></li>
      <li role="separator" className="divider"></li>
      <li className="alternate sidepanel-item-small"><a href="https://www.spotify.com/uk/signup/">Sign up</a></li>

      <li className="alternate sidepanel-item-small">
      <a href="https://www.spotify.com/uk/login/" id="header-login-link" className="user-link">
      <span className="user-text navbar-user-text">Log In</span>
      </a>
      </li>
    </ul>

  </nav>
  
  </div>
  </header>

			)
	}
}

export default Navigation
