import Image from "next/image";
import Hero from "../../components/Hero";
import HowToList from "../../components/HowToList";
import Footer from "../../components/Footer";

import Why from "../../components/Why";
import Cards from "../../components/Cards";
import Ready from "../../components/Ready";
import Navbar from "../../components/Navbar";

export default function Home() {
  return (
    <div className="gradient-01 ">
          <Navbar></Navbar>
          <div  className="Container">
          <Hero></Hero>
          </div>
          <div className="relative">

          <div className="Container">
          <HowToList></HowToList>

          </div>
          <div className="gradient-03 z-0" />
      <div className="gradient-02 z-0" />
          <div className="Container">
          <Why></Why>
          <Cards></Cards>

          </div>
          </div>

          <div className="Container relative">
          <Ready></Ready>
          <div className="gradient-05 z-0" />

          </div>
          
          <Footer></Footer>



  </div>
  );
}
