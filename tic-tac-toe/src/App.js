import React from 'react';
import Lodash from 'lodash'
import Board from './components/Board';
import AppStyle from './AppStyle.css';
import { clone } from '@babel/types';

const ROWS=3;
const COLUMNS=3;
const ROW_ARR= new Array(ROWS).fill('');
const COL_ARR = new Array(COLUMNS).fill('');
const GRID = ROW_ARR.map(x=>COL_ARR.slice());

const flattenAndFilterArrays=(grid)=>{
  const output= [];
  grid.forEach(arr=>{
    output.push(...arr);///...spreadot operator
  })
  return output.filter(box=>!!box);//!! is !== false
}


const mapGridIndexes=({grid,value})=>{// vid 3
  const mappedItems = grid.map((row,rowIndex)=>{
    return row.map((col,columnIndex)=>{
      return col ===value && {
        columnIndex,
        rowIndex,
        
      }
    })
  })
  return flattenAndFilterArrays(mappedItems);
  console.log({mappedItems});
}


class App extends React.Component {
  state = {
    currentValue: 'X',
    grid: Lodash.cloneDeep(GRID),
  }
  

handleClick = ({columnIndex,rowIndex})=>{
  console.log(`clicked box on column:${columnIndex+1} row:${rowIndex+1}`);
  const{
    currentValue,
    grid,
  }=this.state;
  const nextValue=currentValue==='X'?'O':'X';
  const cloneGrid=Lodash.cloneDeep(grid);
  cloneGrid[rowIndex][columnIndex]=currentValue;
  const gridItems = mapGridIndexes({grid:cloneGrid, value:currentValue});
  console.log({gridItems});
  this.setState({currentValue:nextValue,grid:cloneGrid});
}

  render(){
    
    const grid=this.state.grid;
    console.log(grid);
  return (
    <div style={{textAlign:'center'}}>
     <h1>Tic Tac Toe</h1>
     <Board onClick={this.handleClick} rows={grid}/>
    </div>
  );

  }
}

export default App;
