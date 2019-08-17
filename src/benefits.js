import React, { Component } from 'react'

class Benefits extends Component {

	render () {
		return (
<section className="o-wrapper">
  <article className="o-inner">
    <header className="headings-h2">
      <h2 className="headings-h2-f">Why go Premium?</h2>
    </header>

    <article className="benefits">
      <article className="benefit">
        <div className="ben-1" src="https://campaigns.scdn.co/images/benefit-1.png" alt="Download music."></div>
        <article className="ben-txt-wrap">
          <header className="ben-h">Download music.</header>
          <p className="ben-p">Listen anywhere.</p>
        </article>
      </article>

      <article className="benefit">
        <div className="ben-2" src="https://campaigns.scdn.co/images/benefit-2.png" alt="No ad interruptions."></div>
        <article className="ben-txt-wrap">
          <header className="ben-h">No ad interruptions.</header>
          <p className="ben-p">Enjoy nonstop music.</p>
        </article>
      </article>

      <article className="benefit">
        <div className="ben-3" src="https://campaigns.scdn.co/images/benefit-3.png" alt="Play any song."></div>
        <article className="ben-txt-wrap">
          <header className="ben-h">Play any song.</header>
          <p className="ben-p">Even on mobile.</p>
        </article>
      </article>

      <article className="benefit">
        <div className="ben-4" src="https://campaigns.scdn.co/images/benefit-4.png" alt="Unlimited skips."></div>
        <article className="ben-txt-wrap">
          <header className="ben-h">Unlimited skips.</header>
          <p className="ben-p">Just hit next.</p>
        </article>
      </article>
    </article>
    <footer className="iratEd"></footer>
  </article>
</section>
			)
	}
}

export default Benefits
