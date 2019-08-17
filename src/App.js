import React from 'react';
import './dcompstyles.css';
import './spotify.css';
import './nav.js'
import Navigation from './navigation'
import Hero from './hero'
import Benefits from './benefits'
import Comparison from './comparison'
import Footer from './footer'

class App extends React.Component {
  render (){
  return (
<div className="App">
<Navigation />

<main role="main">
<Hero />
<Benefits />
<Comparison />

</main>
<Footer />

    </div>
  );
}
}

export default App;
