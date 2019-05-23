import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'



class App extends React.Component{
    constructor(props){//initializes states
        super(props);
        this.state= {lat: null, errorMessage: ''};
        
    }

    //state= { lat:null, errorMessage: ''}

    componentDidMount(){
        navigator.geolocation.getCurrentPosition(
            position=> this.setState({ lat: position.coords.latitude}),// use console.log(position) to find the tid bit datas that make up the object
            err=> this.setState({errorMessage: err.message})
            );
    }

    renderContent(){
        if(this.state.errorMessage && !this.state.lat){
            return(<div>Error: {this.state.errorMessage}</div>);
        }
        else if(!this.state.errorMessage && this.state.lat){
            return(<SeasonDisplay lat= {this.state.lat}/>);  //when calling the state the component will rerender itself and its components
        }
        else{
            return<Spinner message="Please accept location request" />;
        }
    }
    render (){ //we always need a render function
        //Always avoid placing conditions into your render function
        return(<div className="border red">
                {this.renderContent()}
        </div>);
    }


}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
);