import React, { useState } from 'react'

export default function CustomInput(props) {

  const[fact, setFact] = useState('')
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder= {props.placeholder}
          onChange={(e)=>console.log(e.target.value)}  
        />
      </form>
    </div>
  )
}
