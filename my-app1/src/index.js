//import react/reactdom
import React from 'react';
import ReactDOM from 'react-dom';
//crete react component
function setButtonText(buttonText){
    buttonText="Click button Now!";
}
//Note I have not learned how to update the information live because that stuff comes way later in the tutorial
const Tim=()=>{
    const buttonText= "Click Me";
    return (<div>
        <label className="label" htmlFor="name"> Enter name: </label>
        <input id="name" type="text"/>
        <button style ={{backgroundColor:'blue',color: 'white'}} onClick="getButtonText(buttonText)">{buttonText}</button>

        
        <form onInput="x.value=parseInt(a.value)+parseInt(b.value)">0
        <input type="range" id="a" value="50"/>100
        +<input type="number" id="b" value="50"/>
        =<output name="x" htmlFor="a b"></output>
        </form>
    </div>);
};

//take component and put on screen
ReactDOM.render(
    <Tim />,
    document.querySelector('#dirt')
)