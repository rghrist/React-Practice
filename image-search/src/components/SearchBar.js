import React from 'react';

class SearchBar extends React.Component{//you dont need to add (props) to it and you cant
    state={term: ''};
  
    onFormSudmit=event=>{//arrow function to avoid "this" error vid 85
        event.preventDefault();
        this.props.onSubmit(this.state.term);// when in class based componenet reference props with this.
    }
    render(){
        return (<div className="ui segment">
        <form onSubmit={this.onFormSudmit} className= "ui form">
            <div className="field">
              <label>Image search:</label>
              <input type="text" value={this.state.term} onChange={(event)=>this.setState({term: event.target.value})}/> 
            </div>
        </form>
        </div>);//You do not want onInputChange() as it will be called on render
    }
}
export default SearchBar;