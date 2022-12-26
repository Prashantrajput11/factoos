import React, { useState } from 'react'
import SolidCta from './solidCta';

export default function CustomInput(props) {
  console.log("props",props);
const [text, setText] = useState('')
const [show_fact_form, set_show_fact_from] = useState(false)

    function handleSubmit(e){
      e.preventDefault();

      // const new_fact = {
      //   id: Math.round(Math.random() * 1000000),
      //   text : text
      // }
      // props.setFact(()=>[new_fact, ...props.fact])

      // props.setShowForm(false)
      
    }

 
  return (
      <form onSubmit={handleSubmit} className='form-container'>
        
        <input
          type="text"
          placeholder= {props.placeholder}
          onChange={(e)=>setText(e.target.value)}  
        />

      <SolidCta
        // onClick = {()=>alert('helllo')}
        text = "POST"
        type="primary"
        size="small"
      />
      </form>
  )
}
