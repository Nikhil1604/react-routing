import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

const Header = () => {
  return (
    <div className='header'>
      <ul>
        <li>
          <Link to='/' className='txt'>Home</Link>
        </li>
        <li>
          <Link to='/about' className='txt'>About</Link>
        </li>
        <li>
          <Link to='/contact' className='txt'>Contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header