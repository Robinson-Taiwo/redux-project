import React from 'react'
import "./Navbar.css"


const Navbar = ({posts}) => {

    

  return (
    <div className='navbar'>
        <h1>NewsHub</h1>
        <input className='search' type="text" placeholder='search'/>
    </div>
  )
}

export default Navbar