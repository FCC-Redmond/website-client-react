import React, { Component } from 'react';

import Navigation from './components/Navigation';
import Welcome from './components/Welcome';
import Members from './components/Members';
import Projects from './components/Projects';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Welcome />
        <Members />
        <Projects />
      </div>
    );
  }
}

export default App;
