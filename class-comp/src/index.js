import React from 'react';
import ReactDOM from 'react-dom';
import { runInThisContext } from 'vm';




class App extends React.Component{
    constructor(props){//initializes states
        super(props);
        this.state= {lat: null, errorMessage: ''};
        
    }
    componentDidMount(){
        navigator.geolocation.getCurrentPosition(
            position=> this.setState({ lat: position.coords.latitude}),
            err=> this.setState({errorMessage: err.message})
            );
    }
    render (){ //we always need a render function
        if(this.state.errorMessage && !this.state.lat){
            return(<div>Error: {this.state.errorMessage}</div>);
        }
        else if(!this.state.errorMessage && this.state.lat){
            return(<div>Latitude: {this.state.lat}</div>);
        }
        else{
            return(<div>Loading....</div>);
        }
    }


}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
);