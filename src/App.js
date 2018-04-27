import './App.css';
import React, { Component } from 'react';
import createHeader from './components/header/header';
import createChordOrScale from './components/chord-or-scale/chord-or-scale';
import createSelectKey from './components/select-key/select-key';
import createSelectQuality from './components/select-quality/select-quality'

const Header = createHeader(React);
const ChordOrScale = createChordOrScale(React);
const SelectKey = createSelectKey(React);
const SelectQuality = createSelectQuality(React);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ChordOrScale />
        <SelectKey />
        <SelectQuality />
      </div>
    );
  }
}

export default App;
