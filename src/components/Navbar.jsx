import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>

<ul className='list'>

<li><Link to ='/'>Home</Link></li>
<li><Link to ='/about'>About</Link></li>
<li><Link to ='/menu'>Menu</Link></li>
<li><Link to ='/contact'>Contact</Link></li>
<li><Link to ='/blogs'>Blogs</Link></li>
<li><Link to ='/login'><button>login</button></Link></li>



</ul>

    </div>
  )
}

export default Navbar