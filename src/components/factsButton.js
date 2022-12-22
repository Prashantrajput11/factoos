import React from 'react'

export default function FactsButton(props) {
  return (
    <button style={{backgroundColor:  props.backgroundColor}}>{props.text}</button>
  )
}
