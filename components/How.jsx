"use client";
import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import TextAnimation from "../utils/textAnimation";
import HowToImage from '../public/images/img4.jpg'
import Image from "next/image";
const How = ({Reverse,Coach, title, text}) => {
  return (
    <div>

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="w-[100vw] relative z-10 mb-[60px]"
    >
  

      <div className="grid  lg:grid-cols-[auto,auto] px-8 md:px-20  grid-cols-1 items-center justify-items-center gap-14  lg:gap-24">
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1,true)}
          className={` w-[350px] lg:w-[450px]  h-[350px] ${Coach?"how-img-div-coach":"how-img-div"} ${Reverse?" lg:col-start-2 lg:row-start-1  lg:justify-self-start":"lg:justify-self-end"} `}
        >
          <Image priority={true}   placeholder='blur' src={HowToImage} alt="img" className="how-img" />
         {/* <motion.img   src={"/images/img4.jpg"} alt="img" className="how-img" /> */}

        </motion.div>



        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1,true)}
          className={` text-center lg:text-start lg:w-[450px]  ${Reverse?" lg:col-start-1 lg:row-start-1 lg:justify-self-end ":"lg:justify-self-start"}`}
        >
          <h3 className=" font-bold mb-2">{title}</h3>
          <p className=" font-light  lg:w-[90%]">
            {text}
          </p>
        </motion.div>
      </div>
    </motion.div>
    </div>
  );
};

export default How;
