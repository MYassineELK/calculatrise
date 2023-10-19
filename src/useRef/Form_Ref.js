import React, { useRef } from 'react'

export default function Form_Ref() {
    const nameref=useRef()
    const ageref=useRef()
    const prenomref=useRef()
    const villeref=useRef()

  return (
    <div>
      name   :<input type="text"  ref={nameref}/><br />
      prenom :<input type="text"  ref={prenomref}/><br />
      age    :<input type="text"  ref={ageref}/><br />
      ville  :<input type="text"  ref={villeref}/><br />
      <input type="button" onClick={()=>console.log(nameref.current.value)} value="sive" />
    </div>
  )
}
