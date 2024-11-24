import React from 'react'
import './logo.css'
import { LoaderPinwheel } from 'lucide-react';

const Logo = () => {
  return (
    <>
      <div className="log">
      <h1><LoaderPinwheel size={30} 
        className='primary'/>
        now
        <span className='primary'>Pay</span>
        </h1>
        
      </div>
    </>
  )
}

export default Logo
