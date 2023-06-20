import React from 'react'
import FormCont from '../../../components/form/FormCont'
import Navbar from '../../../components/Navbar'

type Props = {}

const Form = (props: Props) => {
  return (
    <div className='gradient-01 h-[100vh] overflow-auto'>
      <Navbar></Navbar>
    
      <FormCont ></FormCont>


    </div>
  )
  
}

export default Form