import React,{useState} from 'react';

import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
  const [menuOpen,setMenuOpen] = useState(false)
   return (
     <nav>
      <Link to= "/"className='title'>Website</Link>
      <div className='menu'>
        <span></span>
        <span></span>
        <span></span>
      </div>
       <ul>
         <li>
          <Link to="/about">About</Link>
         </li>
         <li>
          <Link to ="/services">Services</Link>
         </li>
         <li>
          <Link to ="contact">Contact</Link>
         </li>
       </ul>
     </nav>
   ); 
};
