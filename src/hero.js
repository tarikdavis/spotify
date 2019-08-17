import React, { Component } from 'react'

class Hero extends Component {

	render () {
		return (
<section className="header-wrapper" role="banner" color="#fff" offset="">
  <article className="header-inner">
    <header className="headings-wrap">
      <div className="headings-inner">
        <div className="headings-margin-t"></div>
      <div>
        <h1 className="headings-h1">Go Premium. Be happy.</h1>
      </div>
      <div>
        <h2 className="sub-h2">Try Premium free for 30 days. Only £9.99/month after.*</h2>
      </div>

      <div className="button-wrapper">
        <div>
          <a className="button-trial" href="https://www.spotify.com/purchase/offer/30day-intro-offer"><span>Start free trial</span></a>
        </div>
      </div>
    </div>
  </header>
  <footer className="disclaimer">
    <div className="disclaimer-pos">* <a href="https://www.spotify.com/legal/new-30-days-free-trial-terms-and-conditions">Terms and conditions</a> apply. Open only to users who haven't already tried Premium.
    </div>
  </footer>
</article>
</section>
			)
	}
}

export default Hero
