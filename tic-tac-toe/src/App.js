import React from 'react';
import Lodash from 'lodash'
import Board from './components/Board';
import './AppStyle.css';

const ROWS=3;
const COLUMNS=3;
const ROW_ARR= new Array(ROWS).fill('');
const COL_ARR = new Array(COLUMNS).fill('');
const GRID = ROW_ARR.map(x=>COL_ARR.slice());

class App extends React.Component {
  state = {
    grid: Lodash.cloneDeep(GRID),
  }
  
  render(){
    const grid=this.state.grid;

  return (
    <div className="app-style">
     <h1>Tic Tac Toe</h1>
     <Board rows={grid}/>
    </div>
  );

  }
}

export default App;
