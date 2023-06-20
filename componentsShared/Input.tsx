import classNames from 'classnames'
import React from 'react'

type Props = {
  type: "email" | "text" | "password"
  placeholder: string,
  size: "medium" | "large" | 'full'
  required?: boolean
  textarea?: boolean
  register: any
  error: any
  name: string
}


const Input = (props: Props) => {
  return (
    <div className={"relative group z-0 w-full  h-[40px] " + " " + (props.size == 'medium' ? MedInput : props.size == 'large' ? LargeInput : 'w-full')}>
      {props.textarea
        ? <textarea {...props.register(props.name)} placeholder=" " maxLength={400} className={input + " resize-none "} style={{ height: "100px" }}></textarea>
        : <input {...props.register(props.name)} placeholder=" " type={props.type} className={input + " " + (props.error && Error)} />

      }
      {props.error && <p className='text-red-500 text-xs font-bold w-[100%] ml-2'>{props.error.message}</p>}
      <label className={label}>{props.placeholder}{props.required && <span className='text-xl font-bold'>*</span>}</label>
    </div>
  )
}

export default Input
const input = classNames("block py-4 px-2 w-full text-md  rounded-lg border-2 border-gray-600 appearance-none    focus:outline-none focus:ring-0 focus:border-[#74b4ed] peer ")
const label = classNames("pointer-events-none  px-3 peer-focus:font-medium peer-focus: absolute text-md text-gray-400   duration-300 transform -translate-y-9 left-1 scale-75 top-4  origin-[0] peer-focus:left-1 peer-focus:text-[#74b4ed]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10")
const MedInput = classNames("w-[13vw]")
const LargeInput = classNames("w-[25vw]")
const Error = classNames("border-red-500")