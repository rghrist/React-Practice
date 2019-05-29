import React from 'react';
import Button from 'react-bootstrap/Button'
import './App.css';
import './Button.css'

function App() {
  return (<div>
    <div >
    <button type="button" style={{display:'flex' ,marginLeft: 'auto'}}>Hi </button>
    <label>Hi</label>
    <button type="button" style={{display:'flex' ,marginRight: 'auto'}}>Hello </button>
    </div>

    <div className="button2"><button >Su</button><button> Du</button></div>
    </div>);
}

export default App;
