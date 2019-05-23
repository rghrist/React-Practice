import React from 'react';
import { tsPropertySignature } from '@babel/types';

const Spinner = (props) =>{
return(
  <div class="ui active dimmer">
    <div class="ui big text loader">{props.message}</div>
  </div>

);
};

Spinner.defaultProps={
    message:"Loading..."
}

export default Spinner;