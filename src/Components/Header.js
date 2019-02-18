import React from 'react';
import './header.css'

const header = () =>{
    return(
        <header className="bg-white black-80 tc pv4 avenir">
        <div><img src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2F0%2F00%2FIBM_Watson_Logo_2017.png&f=1" alt="Watson logo" height="200px" width="200px"></img></div>
        <h1 className="mt2 mb0 baskerville i fw1 f1">FWW</h1>
        <h2 className="mt2 mb0 f6 fw4 ttu tracked">Fun with Watson</h2>
        <nav className="bt bb tc mw7 center mt4">
          <a className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l" href="/" target="_blank">Home</a>
          <a className="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l" href="https://github.com/moniesharma" target="_blank" rel="noopener noreferrer">My GitHub</a>
          <a className="f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l" href="mailto:munish2870@hotmail.com" target="_blank" rel="noopener noreferrer">Contact Me</a>
        </nav>
      </header>
      
    )
}

 export default header; 