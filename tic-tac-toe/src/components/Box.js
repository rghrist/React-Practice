import React from 'react';
import './Box.css';
const border='1px solid black'

const Box = ({firstRow,lastRow,firstIndex,lastIndex,onClick,size=60,columnIndex,rowIndex,value}) =>{
    return(<div onClick={() =>{
        if(!value){
            onClick({columnIndex,rowIndex});
        }
    }}

    style={{//onClick({columnIndex,rowIndex}
        alignItems:'center',
        borderTop: firstRow ? 'none': border,
        borderBottom:lastRow ? 'none':border,
        borderLeft:!firstIndex && border,//alternative style
        borderRight:!lastIndex && border,
        fontSize:size*.8,
        height:size,
        width:size,
        display: 'flex',
        justifyContent:'center',
    }}>
        {value}
    </div>);};


export default Box;