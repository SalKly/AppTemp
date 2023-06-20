'use client'
import React from 'react'
import MainButton from './MainButton'
type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='  h-[100px] w-[100%] relative mb-20'>
    <div className='flex justify-between items-center  bg-[rgba(21,2,21,0.8)] z-10 backdrop-blur-sm fixed  w-[100%] px-24 py-4 '>
      <div className=' flex gap-8 '>
        <p className='mr-4'>Logo</p>
        <p>Pricing</p>
        <p>Pricing</p>
        <p>Pricing</p>
        <p>Pricing</p>
      </div>
      <MainButton size='sm'></MainButton>

    </div>
    </div>
  )
}

export default Navbar