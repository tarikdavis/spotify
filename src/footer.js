import React, { Component } from 'react'

class Footer extends Component {

	render () {
		return (
<footer className="footer footer-default footer-simple footer-highlight-bubblegum" role="contentinfo">
  <div className="container">
    <nav className="row row-small">
      <div className="col-xs-7">
        <ul className="nav nav-small">
          <li>
            <a href="https://www.spotify.com/uk/legal/">Legal</a>
          </li>
          <li>
            <a href="https://www.spotify.com/uk/legal/cookies-policy/">Cookies</a>
          </li>
          <li>
            <a href="https://www.spotify.com/uk/legal/privacy-policy/#s13">About Ads</a>
          </li>
        </ul>
      </div>
      <div className="col-xs-5 text-right">
          <a className="market" href="https://www.spotify.com/uk/select-your-country/" title="Click to change">
          <div className="media">
            <div className="media-body media-middle">
              United Kingdom
            </div>
            <div className="media-right media-middle">
              <span className="media-object flag-icon flag-icon-uk"></span>
            </div>
          </div>
        </a>

                <small className="copyright">© 2019 Spotify AB</small>
      </div>
    </nav>
  </div>
</footer>
			)
	}
}

export default Footer
