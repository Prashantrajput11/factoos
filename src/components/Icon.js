import React from 'react'

export default function Icon(props) {
  console.log('t1', props);
  if(props.source){
    return (
      <img 
        src = {props.source} 
        height = {props.height} 
        width = {props.width}
      />
    )
  }
  else{
    return (
      <img 
        src = {'https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074_1280.jpg'} 
        height = {70} 
        width = {40}
      />
    )
  }

}
