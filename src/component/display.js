import React from 'react';


const Display = ({input, output, error}) => {
const noError=  <><div className='display-row1'>{output}</div>
<div id="display"  className='display-row2'>{input?input:0}</div></>;
  return <div className='display'>
    {error?<span style={{color: 'red'}}>Error</span>:noError}
     
  </div>;
};

export default Display;
