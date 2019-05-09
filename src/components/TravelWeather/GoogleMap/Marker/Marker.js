import React from 'react';

const style = `
  position: absolute;
  top: 50%;
  left: 50%;
  width: 18px;
  height: 18px;
  background-color: #000;
  border: 2px solid #fff;
  border-radius: 100%;
  user-select: none;
  transform: translate(-50%, -50%);
  cursor: ${props => (props.onClick ? 'pointer' : 'default')};
  &:hover {
    z-index: 1;
  }
`

const Marker = props => (
    <div style={style}
        alt={props.text}
        {...props.onClick ? { onClick: props.onClick } : {}}></div>
)

export default Marker