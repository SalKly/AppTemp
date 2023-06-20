import React from 'react'

type Props = {
  size:'sm'|'lg'
}

const MainButton = (props: Props) => {
  return (
<div className={`rounded-full ${props.size==='sm'?'text-base':'text-2xl'}   flex justify-center items-center px-6 py-4  bg-purple-500 hover:bg-purple-700 cursor-pointer transition-colors duration-300`}>
        <p>Get Started</p>
      </div>  )
}

export default MainButton