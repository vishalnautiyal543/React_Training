import React from 'react'
import banner from "../assets/banner.jpg"

function Header() {



  return (
    <div className='my-2 bg-red-400 rounded-xl overflow-hidden'>
        <img src={banner} alt="" />
    </div>
  )
}

export default Header