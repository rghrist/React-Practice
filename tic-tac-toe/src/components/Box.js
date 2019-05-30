import React from 'react';
import './Box.css';
const border='1px solid black'

// when does size need to be 60
const Box = ({firstRow,lastRow,firstIndex,lastIndex,onClick,size=60,columnIndex,rowIndex,value}) =>{
    return(<div onClick={() =>{
        // what is value?
        if(!value){
            //what does onclick do?
            onClick({columnIndex,rowIndex});
        }
    }}

    //what does this style do?
    style={{//onClick({columnIndex,rowIndex}
        alignItems:'center',
        borderTop: firstRow ? 'none': border,
        borderBottom:lastRow ? 'none':border,
        borderLeft:!firstIndex && border,//alternative style
        borderRight:!lastIndex && border,
        fontSize:size*.8, //what is the importance of .8 ?
        height:size,
        width:size,
        display: 'flex',
        justifyContent:'center',
    }}>
        {value}
    </div>);};


export default Box;