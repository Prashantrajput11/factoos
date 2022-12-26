import React from 'react'

export default function Tag(props) {
  return (
    <div 
      className='tag-container'
      style={{backgroundColor: props.backgroundColor,}}
    >
      {props.text}
    </div>
  )
}
