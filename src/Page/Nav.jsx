import React from 'react'
import { Link } from 'react-router-dom'
export default function Nav() {
  return (
    <div>
     <nav>
        <li>
            <Link to="/infos">Hello</Link>
        </li>
     </nav>
    </div>
  )
}
