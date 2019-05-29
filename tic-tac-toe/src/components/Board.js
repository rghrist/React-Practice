import React from 'react';
import Row from './Row';
import { render } from 'react-dom';
class Board extends React.Component{
    
    render(){
        //console.log(this.props.rows);
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

        }
    
    const { object, array } = require('prop-types');

        Board.propTypes = {
        
         rows: array,
        };  

export default Board;