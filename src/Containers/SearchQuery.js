import React from 'react';
import SearchField from '../Components/SearchField';

class SearchQuery extends React.Component{
searchQuery = (event) =>{
    console.log(event.target.value)
}
    render(){
        return(
            <div>
                <SearchField searchQuery={this.searchQuery}/>
            
            </div>
            
        )
    }
}

export default SearchQuery; 