import Link from 'next/link'
import React from 'react'
import { staggerContainer, fadeIn, planetVariants } from "../../utils/motion";
import TextAnimation from "../../utils/textAnimation";

type Props = {
  state:"success"|"error"
  ErrorMessage?:string
  Coach?:boolean
}

const FormFeedBack = (props: Props) => {
  if(props.state==="error"){
    return (
      <div>
        <h2 className='text-black mb-10'>Something went wrong please try again</h2>
        <Link href={props.Coach?'/coach':'/'} className='flex justify-center'>
        <button   className='join-us-button  join-us-button-lg '>Home</button>
  </Link>
      </div>

        )

  }
  else{
    return (
      <div>
        <h2 className='text-black mb-10'>Thank you for filling the form you will hear from us very soon</h2>
        <Link href={props.Coach?'/coach':'/'} className='flex justify-center'>
        <button   className={`${props.Coach?'join-us-button-coach join-us-button-lg':'join-us-button join-us-button-lg'}lg:w-[400px] w-[210px] px-4 py-2`}>Home</button>
  </Link>
      </div>
    )
  }

}

export default FormFeedBack