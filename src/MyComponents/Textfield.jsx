import React from 'react';
import "../MyComponents/Login.css"

const Textfield = (props) => {
  const inputStyle = {
    width: props.width || '100%',
  };

  return (
    <input className='field' type='text' autoComplete='off' placeholder={props.ph} value={props.value} onChange={props.onChange} style={inputStyle} />
  );
}

export default Textfield;
