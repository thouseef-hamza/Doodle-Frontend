import React from 'react';

const BoxWrapper = ({
  children,
  display = 'flex',
  flexDirection = 'column',
  justifyContent = 'center',
  width = '60vw',
  height = '80vh',
  alignItems = 'center',
  margin = 'auto',
  padding = 0,
}) => {
  const boxStyle = {
    display,
    flexDirection,
    justifyContent,
    width,
    height,
    alignItems,
    margin,
    padding,
  };

  return <div style={boxStyle}>{children}</div>;
};

export default BoxWrapper;
