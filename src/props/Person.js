import React from 'react'

export default function Person(props) {
  return (
    <div>
      <h3>"Je 
m'appelle {props.nome} et j'ai {props.age} ans."</h3>
    </div>
  )
}
