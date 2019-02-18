import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import './App.css';
import SearchQuery from './SearchQuery.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <h1 className="mt2 mb0 baskerville i fw1 f1">Fun with Watson</h1>
        <p className="mt2 mb0 f6 fw4 ttu tracked"> FWW aka (Fun with Watson) is a fun App to do basic things to browser with your voice.  </p>
        <div><SearchQuery /></div>
        <Footer />
      </div>
      
    );
  }
}

export default App;
