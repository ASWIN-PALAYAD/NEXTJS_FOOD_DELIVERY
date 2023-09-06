import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='h-1/2 md:h-24 px-4 lg:px-20 xl:px-40 text-red-500 flex items-center justify-between'>
      <Link href={'/'} className='font-bold text-xl' >MASSIMO</Link>
      <p>&copy; ALL RIGHT  RESERVED</p>
    </div>
  )
}

export default Footer