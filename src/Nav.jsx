import React from 'react'
import printImage from './print.svg'
function Nav() {
  return (
    <div className='box-border border-b py-4'>
        <div className='box-border px-5 mx-auto min-h-70 flex items-center'>
        <img src={printImage} />
        </div>
    </div>
  )
}
export default Nav;