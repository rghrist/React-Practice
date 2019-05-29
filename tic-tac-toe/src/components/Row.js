import React from 'react';
import Box from './Box';

import { css } from '@emotion/core';

const rowStyle=css({
    display: 'flex',
    justifyContent:'content',
})

const Row = ({boxes}) =>(

    <div className='rowStyle'>
        {boxes.map((box, index) =>(
            <Box key={index}/>
        ) )}
    </div>);


export default Row;