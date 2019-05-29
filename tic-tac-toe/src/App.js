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
const MIN_TO_WIN=3;
const INITIAL_STATE ={
  currentValue: 'X',
  grid: Lodash.cloneDeep(GRID),
  hasWon: false,
  hasWonMessage:null,
};

const diffCols = ({arr,item})=>{
  const lastItem = arr[arr.length-1];
  return item.columnIndex-lastItem.columnIndex;
}
const diffRows = ({arr,item})=>{
  const lastItem = arr[arr.length-1];
  return item.rowIndex-lastItem.rowIndex;
}
const compareToRest=({currentItems,gridItems,winString})=>{// vid 3 explanation 38:15
  const N=[currentItems];
  const NE=[currentItems];
  const E=[currentItems];
  const SE=[currentItems];
  const S=[currentItems];
  const SW=[currentItems];
  const W=[currentItems];
  const NW=[currentItems];

  const applyDirection=(item) =>{
    if(diffRows({arr:N,item})===1&&diffCols({arr:N,item})===0){
      N.push(item);
    }
    else if(diffRows({arr:NE,item})===1&&diffCols({arr:NE,item})===1){
      NE.push(item);
    }
    else if(diffRows({arr:E,item})===0&&diffCols({arr:E,item})===1){
      E.push(item);
    }
    else if(diffRows({arr:SE,item})===-1&&diffCols({arr:SE,item})===1){
      SE.push(item);
    }
    else if(diffRows({arr:S,item})===-1&&diffCols({arr:S,item})===0){
      S.push(item);
    }
    else if(diffRows({arr:SW,item})===-1&&diffCols({arr:SW,item})===-1){
      SW.push(item);
    }
    else if(diffRows({arr:W,item})===0&&diffCols({arr:W,item})===-1){
      W.push(item);
    }
    else if(diffRows({arr:NW,item})===1&&diffCols({arr:NW,item})===-1){
      NW.push(item);
    }
    const arrays=[N,NE,E,SE,S,SW,W,NW];
    const winningArrays=arrays.filter(arr=>arr.length>=winString);
    return winningArrays.length>0;
  }
  let hasWon=false;
  let i =0;

  while (i<gridItems.length && !hasWon){
    hasWon=applyDirection(gridItems[i]);
    i++
  }
  return hasWon;
}


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

const checkWin = ({gridItems,winString})=>{
  let hasWon = false;//check what lets is
  let i =0;
  while (i<gridItems.length&&!hasWon){
    hasWon=compareToRest({currentItems:gridItems[i],gridItems,winString});

    i++;
  }
  return hasWon;
}

class App extends React.Component {
  state = Lodash.cloneDeep(INITIAL_STATE);
  

handleClick = ({columnIndex,rowIndex})=>{
  console.log(`clicked box on column:${columnIndex+1} row:${rowIndex+1}`);
  const{
    currentValue,
    grid,
    hasWon:gameOver,//renaming hasWon avoid conflict with console log
  }=this.state;
  if(!gameOver){
  const nextValue=currentValue==='X'?'O':'X';
  const cloneGrid=Lodash.cloneDeep(grid);
  cloneGrid[rowIndex][columnIndex]=currentValue;
  const gridItems = mapGridIndexes({grid:cloneGrid, value:currentValue});
  const hasWon=checkWin({gridItems, winString:MIN_TO_WIN});
  //console.log({hasWon});
  this.setState({
    currentValue:nextValue,
    grid:cloneGrid,
    hasWon,
    hasWonMessage: hasWon? `Player ${currentValue} has won!`:null,
  });
}
}

  render(){
    
    const {grid , hasWonMessage}=this.state;
    //console.log(grid);
  return (
    <div style={{textAlign:'center'}}>
     <h1>Tic Tac Toe</h1>
     <Board onClick={this.handleClick} rows={grid}/>
     <button onClick={()=> this.setState(INITIAL_STATE)}>RESET</button>
     <h2>
       {hasWonMessage}
     </h2>
     
    </div>
  );

  }
}

export default App;
