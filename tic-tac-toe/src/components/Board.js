import React from 'react';
import Row from './Row';
import { render } from 'react-dom';
class Board extends React.Component{
    
    render(){
        //console.log(this.props.rows);
    return(
    <div>
        {this.props.rows.map((row,index)=>(
            <Row key={index} boxes={row}/>

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