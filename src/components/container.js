import React from 'react'

export default function Container(props) {


  return (
    <div 
      style= {{
        backgroundColor: props.backgroundColor,
        height: props.height, 
        width:  '1200px',
        borderRadius : props.borderRadius ? props.borderRadius : 0
      }}
    
    >
      {props.children}
    </div>
  )
}
