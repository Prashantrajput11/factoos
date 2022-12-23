import React from 'react'

export default function CustomText(props) {
  return (
    <p 
      style={{
        color: props.textColor, 
        fontWeight: props.fontWeight,
        fontFamily: props.fontFamily,
        fontSize: props.fontSize,
        
        }}
      >
      {props.text}
    </p>
  )
}
