import React from 'react';
import './search.css';
const searchField = (searchQuery) => {
    return (
        <form className="pa4 black-80">
            <div className="measure">
                <input id="name" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" placeholder="search here..." aria-describedby="name-desc" onChange={searchQuery}></input>
                <small id="name-desc" className="f6 black-60 db mb2">What do you want to search, Today?</small>
            </div>
        </form>
    )

}

export default searchField;