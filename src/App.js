import React, { useState } from 'react';
import logo from './Logo-.svg';
import Game from './Game';
import './Style.css';

function App() {
    return (
      <div className="App">
            <h1>Tic Tac Toe</h1>
            <Game />
        </div>
    );
}

export default App;
