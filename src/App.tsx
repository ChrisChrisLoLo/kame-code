import React from 'react'
import './App.css'

import Game from './features/game/Game'

import 'ace-builds/webpack-resolver'

function App() {
  return (
    <div className="App">
      <Game/>
    </div>
  );
}

export default App;
