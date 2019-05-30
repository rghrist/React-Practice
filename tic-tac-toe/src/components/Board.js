import React from 'react';
import Row from './Row';
import { render } from 'react-dom'; // do we need this render?

//why is this a class?
class Board extends React.Component{
    
    render(){
        //console.log(this.props.rows); // is this needed?
    return(
    <div>
        {this.props.rows.map((row,index)=>(
            <Row firstRow={index===0} 
                 lastRow={index===this.props.rows.length-1} 
                 boxes={row}
                 key={index}
                 onClick={this.props.onClick}
                 rowIndex={index}
                 />
        ))}
    </div>
    );
}

        } // this should be indented with the class
    
    //since the prop declaration is outside of the class it should also be on the file level indent
    const { object, array } = require('prop-types');

        Board.propTypes = {
        // odd spacing
         rows: array,
        };  

export default Board;

