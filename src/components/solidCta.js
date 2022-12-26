import React from 'react'
import Icon from './Icon'
import logo from '../asset/logo.png'
import './style.css'

export default function SolidCta(props) {

  function getLeftIcon(props){
    console.log('t2', props);
    if(props.leftIcon){
      return (
        <div style={{marginRight: '8px'}}>
          <Icon

            source = {props.leftIcon}
            height = {20}
            width = {20}
          />
        </div>
      )
    }
  }

  function getCtaBackgroundColor(props){

    if(props.type=="primary"){
      return {backgroundColor: '#3b82f6'}
    }

    if(props.type=="warning"){
      return {backgroundColor: '#f97316'}
    }
    if(props.type=="danger"){
      return {backgroundColor: '#ef4444'}
    }

    if(props.type=="info"){
      return {backgroundColor: '#8b5cf6'}
    }
  }


  function getCtaSize(props){

    if(props.size=="small"){
      return "containerSmall"
    }
    if(props.size=="medium"){
      return "containerMedium"
    }
    if(props.size=="large"){
      return "containerLarge"
    }
    
  }


  return (
    <button 
      style={getCtaBackgroundColor(props)}
      onClick = {props.onClick}
      className = {getCtaSize(props)}>
        {getLeftIcon(props)}
        {props.text}
    </button>
  )
}
