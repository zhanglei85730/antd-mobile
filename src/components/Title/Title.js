import React from 'react';

function Title({ children, ...rest }) {
  const titleStyle = {
    color: '#666',
    margin: '0 10px',
    fontWeight: 'mormal',    
  };
  return (
    <div style={titleStyle} >
      <h3 {...rest}>{children}</h3>
    </ div >
  );
}

export default Title;
