import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import MainSection from './MainSection';

const About = () => <About></About>
const Shop = () => <Shop></Shop>
//const About = () => <About></About>
//const About = () => <About></About>

function App() {
  return (
    <Router>
      <div className="App">
        <Home></Home>
        <MainSection></MainSection>
        <Routes>
          <Route path='/' element={<Home></Home>} ></Route>
          <Route path='/about' element={<About></About>} ></Route>
        </Routes>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Router>

  );
}

export default App;
