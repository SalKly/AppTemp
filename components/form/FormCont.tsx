'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Input from '../../componentsShared/Input';
import Select from "react-select";
import FormFeedBack from './FormFeedBack';

type Props = {
  Coach?: boolean
}

interface FormData {
  firstName: string
  lastName: string
  email: string
  sport?: string
  state?: string
  age?: string
  exp?: string
}

const FormDataSchema = yup.object({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email().required("required"),
})
const FormCont = (props: Props) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(FormDataSchema)
  });
  let [SportSelector, setSportSelector] = useState({
    label: "",
    value: "",
  });
  let [StateSelector, setStateSelector] = useState({
    label: "",
    value: "",
  });
  let [AgeSelector, setAgeSelector] = useState({
    label: "",
    value: "",
  });
  const [SportSelectorErrors, setSportSelectorErrors] = useState(false);
  const [StateSelectorErrors, setStateSelectorErrors] = useState(false);
  const [AgeSelectorErrors, setAgeSelectorErrors] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [Errors, setErrors] = useState(false);
  const [Success, setSuccess] = useState(false);


  function Sportstatechange(state: { label: string; value: string }) {
    HandleSportChange(state.value);
    setSportSelectorErrors(false);
  }
  function HandleSportChange(value: string) {
    setSportSelector({ label: value, value: value });
  }
  let Sports = [
    { value: "Soccer ", label: "Soccer " },
    { value: "Cricket", label: "Cricket" },
    { value: "Basketball", label: "Basketball" },
    { value: "Field Hockey	", label: "Field Hockey	" },
    { value: "Tennis", label: "Tennis" },
    { value: "Volleyball", label: "Volleyball" },
    { value: "Table Tennis", label: "Table Tennis" },
    { value: "Baseball", label: "Baseball" },
    { value: "Softball", label: "Softball" },
    { value: "Lacrosse", label: "Lacrosse" },
    { value: "Rugby", label: "Rugby" },
    { value: "Ice Hockey", label: "Ice Hockey" },
    { value: "Golf", label: "Golf" },
    { value: "Swimming", label: "Swimming" },
    { value: "Track & Field", label: "Track & Field" },
    { value: "Cross Country", label: "Cross Country" },
    { value: "Wrestling", label: "Wrestling" },
    { value: "Gymnastics", label: "Gymnastics" },
    { value: "Cheerleading", label: "Cheerleading" },
    { value: "Dance", label: "Dance" },
    { value: "Bowling", label: "Bowling" },
    { value: "Equestrian", label: "Equestrian" },
    { value: "Fencing", label: "Fencing" },
       
    

    
   
  ];
//Rearrange the sport array by alphabetical order
  Sports.sort(function(a, b){ 
    if(a.value < b.value) { return -1; }
    if(a.value > b.value) { return 1; }
    return 0;
  });

  function Statestatechange(state: { label: string; value: string }) {
    HandleStateChange(state.value);
    setStateSelectorErrors(false);
  }
  function HandleStateChange(value: string) {
    setStateSelector({ label: value, value: value });
  }
  let allStates=['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming']
  let State = [];
  for(let i=0;i<allStates.length;i++){
    State.push({value:allStates[i],label:allStates[i]})
  }
  function Agestatechange(state: { label: string; value: string }) {
    HandleAgeChange(state.value);
    setAgeSelectorErrors(false);
  }
  function HandleAgeChange(value: string) {
    setAgeSelector({ label: value, value: value });
  }

  let Age = [
  
  ];
  for(let i=1;i<100;i++){
    Age.push({value:i,label:i})
  }


  async function HandleDataSubmit(data:FormData){
    console.log(SportSelector.value)
    console.log(StateSelector.value)
    console.log(AgeSelector.value)

    if(SportSelector.value==""){
      setSportSelectorErrors(true);
    }
    if(StateSelector.value==""){
      setStateSelectorErrors(true);
    }
    if(AgeSelector.value==""){
    
      setAgeSelectorErrors(true);
    }

    if(SportSelector.value!="" && StateSelector.value!="" && AgeSelector.value!=""){
      data.sport=SportSelector.value;
      data.state=StateSelector.value;
      if(props.Coach){
        data.exp=AgeSelector.value;
      }
      else{
        data.age=AgeSelector.value;

      }
      console.log(data);

      try{
        setLoading(true);

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/Users/${props.Coach?"AddCoach":"AddAthlete"}`, {
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
  
        });
        setSuccess(true);
        console.log("Lets Goo")
        setLoading(false);
      }catch(err){
        //@ts-ignore
        if(err.response.status==400){
          setErrors(false);
        }else{
          setErrors(true);
        }
        setLoading(false);

      }
     
    }


  }



    
  return (
    <div className={`lg:w-[800px] w-[100%] ${props.Coach?"form-gradient-coach":"form-gradient"}  text-center ml-auto mr-auto bg-white rounded-lg text-black  shadow-md px-10 py-4  mt-4`}> 
    <p className='text-center font-bold text-black'>{props.Coach?"Coach":"Athlete"}</p>
    {Errors?<FormFeedBack  Coach={props.Coach} state='error'></FormFeedBack>:Success?<FormFeedBack Coach={props.Coach} state='success'></FormFeedBack>:
    <div>
    <h2 className=' text-black'>Get app-release exclusives!</h2>

<div className='flex flex-col gap-16 mt-10 mb-10'>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10'>
  <div className='flex  flex-col items-center gap-2'>
    <p className='text-black  font-medium'>Sport</p>
  <Select
       placeholder="Your Sport"
       //@ts-ignore
       className=" w-[100%]  "
       classNames={{
          dropdownIndicator: (state) => "text-primary border-l-0 ",
        }}
       //@ts-ignore
       onChange={Sportstatechange}
       options={Sports}
     />
     {SportSelectorErrors && <p className='text-sm text-red-800'>Please choose a sport</p>}
  </div>
  <div className='flex  flex-col items-center gap-2'>
    <p className='text-black font-medium'>State</p>
  <Select
       placeholder="Your State"
       //@ts-ignore
       className=" w-[100%]  "
       classNames={{
          dropdownIndicator: (state) => "text-primary border-l-0 ",
        }}
       //@ts-ignore
       onChange={Statestatechange}
       options={State}
     />
          {StateSelectorErrors && <p className='text-sm text-red-800'>Please choose your state</p>}

  </div>
  <div className='flex  flex-col items-center gap-2'>
    <p className='text-black font-medium'>{props.Coach?"Years of Experience":"Age"}</p>
  <Select
       placeholder={props.Coach?"Years":"Your Age"}
       //@ts-ignore
       className=" w-[100%]  "
       classNames={{
          dropdownIndicator: (state) => "text-primary border-l-0 ",
        }}
       //@ts-ignore
       onChange={Agestatechange}
       options={Age}
     />
          {AgeSelectorErrors && <p className='text-sm text-red-800'>{props.Coach?"Please choose an option":"Please choose an age"}</p>}

  </div>
      
   
</div>
      <Input register={register} type='text' error={errors.firstName} name={'firstName'} placeholder='First name' size='medium' ></Input>
      <Input register={register} type='text' error={errors.lastName} name={'lastName'} placeholder='Last name' size='medium' ></Input>
      <Input register={register} type='text' error={errors.email} name={'email'} placeholder='Email' size='medium' ></Input>
<div className='flex justify-center '>
      <button onClick={handleSubmit(HandleDataSubmit)}  className={`  join-us-button ${Loading&&"Loading-button"} ${props.Coach?'join-us-button-coach join-us-button-lg':'join-us-button join-us-button-lg'}lg:w-[400px] w-[210px] px-4 py-2`}>{Loading?<div
  className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
  role="status">
  <span
    className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
    >Loading...</span>
</div>
:"Submit"}</button>
</div>
    </div>
    </div>
    }

    
    
    </div>
  )
}

export default FormCont