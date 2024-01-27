import React from 'react';

const Bootstraplogo = (props) => {
    const { w } = props;
  return (
    <img src='https://cdn-icons-png.flaticon.com/128/5968/5968672.png'
         alt='Bootstrap Logo' width = { w }
         style={{ marginTop:'-5px' }} />
  )
}

export default Bootstraplogo;