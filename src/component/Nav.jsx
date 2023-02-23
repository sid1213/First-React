import React from 'react'
import {NavLink} from "react-router-dom"
export default function Nav() {
  return (
    <ul>
      <li>
        <NavLink to="/" className='bg-green-100'> hello</NavLink>
      </li>
      <li>
        <NavLink to="/about-us"> hello</NavLink>
      </li>
    </ul>
  )
}
