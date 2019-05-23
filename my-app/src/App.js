import React from 'react';
import logo from './logo.svg';
import './App.css';
function sayHelloInFiveSeconds(name){
    var prompt = "Hello, " + name + "!";
    // Inner functions are put in the local scope by default, as if they were
    // declared with `var`.
    function inner(){
        alert(prompt);
    }
    setTimeout(inner, 2000);
    // setTimeout is asynchronous, so the sayHelloInFiveSeconds function will
    // exit immediately, and setTimeout will call inner afterwards. However,
    // because inner is "closed over" sayHelloInFiveSeconds, inner still has
    // access to the `prompt` variable when it is finally called.
}

function makeAdder(a) {
  return function(b) {
    return a + b;
  };
}
var add5 = makeAdder(5);
var add20 = makeAdder(20);
add5(6); // ?
add20(7);
alert(add5(64));

function avg(...args) {
  var sum = 0;
  for (let value of args) {
    sum += value;
  }
  return sum / args.length;
}


alert(avg(2, 3, 4, 5));
sayHelloInFiveSeconds("Adam");





function App() {
  return (
   /// <div className="App">
      
      <body className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          "OOGA BOOGA"//Edit <code>src/App.js</code> and save to reload.
		  
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </body>
    //</div>
  );
}

export default App;
