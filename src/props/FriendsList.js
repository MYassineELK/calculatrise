import React from 'react'

export default function FriendsList(props) {
    var c=props.list.map((e)=>
        <h5>{e}</h5>
    )
  return (
    <div>
      {c}
    </div>
  )
}
