import React from 'react'
import Image from "next/image";
import Hero from "../../../components/Hero";
import How from "../../../components/How";
import How2 from "../../../components/How-02";
import How3 from "../../../components/How-03";
import HowToList from "../../../components/HowToList";
import Navbar from '../../../components/Navbar';
import Why from '../../../components/Why';
import Cards from '../../../components/Cards';
import Ready from '../../../components/Ready';
import Footer from '../../../components/Footer';
type Props = {}

const Coach = (props: Props) => {
  return (
  //   <div className="gradient-01-coach">
  //   <Navbar></Navbar>
  //   <div className='Container'>
  //   <Hero Coach ></Hero>

  //   </div>
  //   <div className="relative Container">
  //     <div className='Container'>
  //     <HowToList Coach></HowToList>

  //     </div>
  //     <div className="gradient-03 z-0" />
  //     <div className="gradient-02 z-0" />
  //     <div className=''>
  //     <Why Coach></Why>
  //   <Cards Coach></Cards>
  //     </div>
  //   </div>
  //   <div className="relative ">
  //     <Ready Coach></Ready>
  //     <div className="gradient-05 z-0" />
  //   </div>
    

    
    
  //   <Footer></Footer>
  // </div>

  <div className="gradient-01-coach ">
  <Navbar Coach></Navbar>
  <div  className="Container">
  <Hero Coach></Hero>
  </div>
  <div className="relative">

  <div className="Container">
  <HowToList Coach></HowToList>

  </div>
  <div className="gradient-03 z-0" />
<div className="gradient-02 z-0" />
  <div className="Container">
  <Why Coach></Why>
  <Cards Coach></Cards>

  </div>
  </div>

  <div className="Container relative">
  <Ready  Coach></Ready>
  <div className="gradient-05 z-0" />

  </div>
  
  <Footer ></Footer>



</div>
  )
}

export default Coach