"use client";
import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import TextAnimation from "../utils/textAnimation";

const Hero3 = (props) => {
  return (
    
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="w-[100vw] relative z-10"
    >
      <div className="flex flex-row justify-center items-center gap-10">
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="w-[450px] h-[350px]"
        >
          <h3 className="text-[40px] font-bold mb-[50px]">POINT 2</h3>
          <p className="text-[25px] font-light w-[90%]">
            Fanny at wrong table ye in. Be on easily cannot innate in lasted
            months on. Differed and and felicity steepest mrs age Stronger
            unpacked felicity to of mistaken. Fanny at wrong table ye in
          </p>
        </motion.div>

        <div className="flex flex-col items-center justify-center ml-[50px] mr-[50px]">
          <div className="step-selected">
            <p className="step">02</p>
          </div>
          <div className="border"></div>
        </div>

        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className=" w-[450px] h-[350px] how-img-div"
        >
          <img src="images/img4.jpg" alt="img" className="how-img" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero3;
