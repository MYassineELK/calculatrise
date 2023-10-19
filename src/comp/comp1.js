import React from 'react'
import {PRODUCTS} from "./PRODUCTS"

export default function comp1() {
  return (
    <div>
    <table style={{width:"600px"}} className='tab'>
        <tr style={{backgroundColor:"gold"}}>
            <td>category</td>
            <td>name</td>
            <td>price</td>
        </tr>
        {PRODUCTS.map((el)=><tr style={{backgroundColor:"green"}}><td>{el.category}</td><td>{el.name}</td><td>{el.price}</td></tr>)}
    </table>
    
    </div>
  )
}
