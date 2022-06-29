import React from 'react'

export default function Button(props) {
  return (
    <button
    style={{backgroundColor: props.backgroundColor? props.backgroundColor: 'white',
            height: props.height? props.height : '40px',
            width: props.width? props.width : '180px'
}}  
    onClick={props.onClick}
    >{props.text}</button>
  )
}
