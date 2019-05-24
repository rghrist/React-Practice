import React from 'react';
import SearchBar from './SearchBar';
import unsplashed from '../api/unsplashed';
import ImageList from './ImageList'
class App extends React.Component {
    state= {images:[]};
    onSearchSudmit= async (term) =>{
        const response= await unsplashed.get('search/photos',{
            params:{
                query:term
            },   
        });
        this.setState({images: response.data.results})
}

    render(){
        return(<div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSudmit}/>
        <ImageList images={this.state.images}></ImageList>
        </div>);
    }
};

export default App;