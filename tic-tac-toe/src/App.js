/* general notes: there should be spacing between parens, curly brackets etc.
    code blocks need to be indented to show where the scope actually exists at
    vertical height is your friend and makes code easier to use
      - there should be new lines after methods and things like loops or if checks
*/


import React from 'react';
//lodash is usually imported as _
import Lodash from 'lodash'
import Board from './components/Board';
//Do we need appstyle or clone ?
import AppStyle from './AppStyle.css';
import { clone } from '@babel/types';

//ROW_SIZE / COLUMN_SIZE
const ROWS=3;
const COLUMNS=3;
//ROWS
const ROW_ARR= new Array(ROWS).fill('');
//COLUMNS
const COL_ARR = new Array(COLUMNS).fill('');
const GRID = ROW_ARR.map(x=>COL_ARR.slice());
const MIN_TO_WIN=3;

// this is really only needed for a reset, was that in the requirements from Ben?
// if I said you can't use this pattern, what would you do instead?
const INITIAL_STATE ={
  currentValue: 'X',
  grid: Lodash.cloneDeep(GRID),
  hasWon: false,
  hasWonMessage:null,
};

// vertical spacing
// use full name such diffColumns
// do we need to pass in the full array?
// what is item?
const diffCols = ({arr,item})=>{
  const lastItem = arr[arr.length-1];
  return item.columnIndex-lastItem.columnIndex;
}
const diffRows = ({arr,item})=>{
  const lastItem = arr[arr.length-1];
  return item.rowIndex-lastItem.rowIndex;
}
const compareToRest=({currentItems,gridItems,winString})=>{// vid 3 explanation 38:15 <- Doesn't mean anything to me.
  const N=[currentItems];
  const NE=[currentItems];
  const E=[currentItems];
  const SE=[currentItems];
  const S=[currentItems];
  const SW=[currentItems];
  const W=[currentItems];
  const NW=[currentItems];

  // some vertical spacing and horizontal spacing
  const applyDirection=(item) =>{
    // you're gonna have to explain this in depth. From reading this, I cant tell what makes a straight, horizontal or diagonal win.
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
  // why not use a for loop?

  while (i<gridItems.length && !hasWon){
    // if this is calling the above nested method, it should be above the nested method
    hasWon=applyDirection(gridItems[i]);
    i++
  }
  return hasWon;
}

// extra line
const flattenAndFilterArrays=(grid)=>{
  const output= [];
  grid.forEach(arr=>{
    // how does the spread operator work? why do we need it?
    output.push(...arr);///...spreadot operator
  })
  return output.filter(box=>!!box);//!! is !== false
}

// extra line
const mapGridIndexes=({grid,value})=>{// vid 3
  const mappedItems = grid.map((row,rowIndex)=>{
    return row.map((col,columnIndex)=>{
      return col ===value && {
        columnIndex,
        rowIndex,
        // extra line
      }
    })
  })
  return flattenAndFilterArrays(mappedItems);
  console.log({mappedItems}); // still useful? won't ever be hit
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
  // what is state?
  state = Lodash.cloneDeep(INITIAL_STATE);
  
//handleClick should be indented more
//handleClick is doing a lot, what is it doing
//Why is this all in one method?
handleClick = ({columnIndex,rowIndex})=>{
  console.log(`clicked box on column:${columnIndex+1} row:${rowIndex+1}`); // still useful?
  const{
    currentValue,
    grid,
    hasWon:gameOver,//renaming hasWon avoid conflict with console log - // what conflict?
  }=this.state;
  if(!gameOver){ //indent in code blocks
  const nextValue=currentValue==='X'?'O':'X';
  // why do we need lodashs clonedeep
  const cloneGrid=Lodash.cloneDeep(grid);
  cloneGrid[rowIndex][columnIndex]=currentValue;
  // does this rebuild the entire grid each time a click happens?
  const gridItems = mapGridIndexes({grid:cloneGrid, value:currentValue});
  const hasWon=checkWin({gridItems, winString:MIN_TO_WIN});
  //console.log({hasWon});
  this.setState({
    currentValue:nextValue,
    grid:cloneGrid,
    hasWon,
    hasWonMessage: hasWon? `Player ${currentValue} has won!`:null, // why do we need to set this up every time?
  });
}
}

  render(){
    
    const {grid , hasWonMessage}=this.state;
    //console.log(grid); // not needed
  return (
    <div style={{textAlign:'center'}}>
     <h1>Tic Tac Toe</h1>  {/* magic string */ }
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
