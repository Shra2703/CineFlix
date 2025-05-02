import React from 'react'
import { LOGO_URL } from '../constanst'

const Header = () => {
  return (
    <div className='px-28 pt-10 pb-5'>
        <div className='w-xl'>

        <img src={LOGO_URL} alt="Netflix Logo" className='w-[9rem] h-[2.5rem] object-contain' />
        </div>
    </div>
  )
}

export default Header
