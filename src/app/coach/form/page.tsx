import React from 'react'
import FormCont from '../../../../components/form/FormCont'
import Navbar from '../../../../components/Navbar'

type Props = {}

const Form = (props: Props) => {
  return (
    <div className='gradient-01-coach h-[100vh] overflow-auto'>
      <Navbar Coach></Navbar>
      <FormCont Coach  ></FormCont>


    </div>
  )
  
}

export default Form