import React from 'react'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: '18px',
  height: '18px',
  backgroundColor: '#000',
  border: '2px solid #fff',
  borderRadius: '100%',
  userSelect: 'none',
  transform: 'translate(-50%, -50%)',
}

const Marker = props => (
    <div style={style}
        alt={props.text}
        {...props.onClick ? { onClick: props.onClick } : {}}></div>
)

export default Marker