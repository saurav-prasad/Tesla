import React from 'react';
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import MenuState from './context/Menu/menuState'
function App() {
  return (
    <>
      <div className="App">
        <MenuState>
          <Header />
        </MenuState>
        <Home />
      </div>
    </>
  );
}

export default App;
