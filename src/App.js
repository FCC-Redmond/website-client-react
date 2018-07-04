import React, { Component } from 'react';

import Navigation from './components/Navigation';
import Welcome from './components/Welcome';
import Join from './components/Join';
import Members from './components/Members';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Welcome />
        <Join />
        <Members />
      </div>
    );
  }
}

export default App;
