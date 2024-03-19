import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='bg-black text-white  text-base flex items-center py-6 pl-4 gap-x-2 ' >
        <div> <Link to="/">Home</Link></div>
        <div> <Link to="/Exchanges">Exchanges</Link></div>
        <div> <Link to="/coins">Coins</Link></div>
       
    </div>
  )
}

export default Navbar