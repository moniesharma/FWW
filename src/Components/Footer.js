import React from 'react';
import './footer.css'

const footer = () => {
    return (

        <footer className="pv4 ph3 ph5-m ph6-l mid-gray">
            <small className="f6 db tc">© 2019 <b className="ttu">Munish Sharma</b>., All Rights Reserved</small>
            <div className="tc mt3">
                <a href="#/" title="Language" className="f6 dib ph2 link mid-gray dim">Language</a>
                <a href="#/" title="Terms" className="f6 dib ph2 link mid-gray dim">Terms of Use</a>
                <a href="#/" title="Privacy" className="f6 dib ph2 link mid-gray dim">Privacy</a>
            </div>
        </footer>
    )
}

export default footer; 