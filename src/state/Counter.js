import React, { useState } from 'react'

export default function Counter() {
    const [numbre,setnumbre]=useState(0)
  return (
    <div>
      <div>{numbre}</div>
      <div>
      <button onClick={()=>setnumbre(numbre+1)}>Incrémenter</button>
      <button onClick={()=>setnumbre(numbre-1)}>Décrémenter</button>
      </div>
    </div>
  )
}
