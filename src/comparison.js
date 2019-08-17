import React, { Component } from 'react'

class Comparison extends Component {

	render () {
		return (
<section className="o-wrapper">
  <article className="o-inner">
    <article className="c-cont">
      
      <article className="comp1-a comp-s">
        <h3 className="head-h3">Spotify Premium</h3>
        <h4 className="price"><span>£9.99</span><span className="month"> / month</span></h4>
        <p className="comp-p">Start your 30 day free trial* </p>
        <ul className="c-b">
          <li className="c-ls">Play any song</li>
          <li className="c-ls">Listen offline</li>
          <li className="c-ls">No ad interruptions</li>
          <li className="c-ls">Unlimited skips</li>
          <li className="c-ls">High audio quality</li>
        </ul>
        <a className="button-trial button-comp" href="https://www.spotify.com/purchase/offer/trial-30d">Get Premium</a>
      </article>

      <article className="comp-s">
        <ul className="c-l">
          <li className="ls-txt"><span>Premium for Students</span><a className="ln-mr" href="https://www.spotify.com/student">Learn More</a></li>
          <li className="ls-txt"><span>Premium for Students</span><a className="ln-mr" href="https://www.spotify.com/student">Learn More</a></li>
          <li className="ls-txt"><span>Premium for Students + Headspace</span><a className="ln-mr" href="https://www.spotify.com/headspace/student/">Learn More</a></li>
          <li className="ls-txt"><span>Premium for Family</span><a className="ln-mr" href="https://www.spotify.com/family">Learn More</a></li>
          <li className="ls-txt"><span>Premium + Headspace</span><a className="ln-mr" href="https://www.spotify.com/headspace">Learn More</a></li>
          <li className="ls-txt"><span>PlayStation<sup>®</sup></span><a className="ln-mr" href="https://www.spotify.com/playstation">Learn More</a></li>
        </ul>
      </article>

    </article>
  </article>
</section>
			)
	}
}

export default Comparison
