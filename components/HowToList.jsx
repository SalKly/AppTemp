"use client";
import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import How from "./How";
import { steps } from "../constants";

const HowToList = (props) => {
  return (
    <div className="">
      <div className="flex flex-col mb-20 lg:mb-32 justify content items-center ">
        <motion.div
          variants={fadeIn("top", "tween", 0.2, 1, true)}
          className="flex-[0.75] flex justify-center flex-col"
        >
          <h2 className="font-bold">
            <span
              className={` ${
                props.Coach ? "outlined-text-coach" : "outlined-text"
              } `}
            >
              how
            </span>{" "}
            it works{" "}
          </h2>
        </motion.div>
        <motion.h3
          variants={fadeIn("top", "tween", 0.5, 1, true)}
          className="text-center"
        >
          Get Started With 3 Easy Steps
        </motion.h3>
      </div>
      <div className="mb-[10px] flex flex-col   gap-14 lg:gap-36">
        {steps.map((step, index) => (
          <How
            key={index}
            step={step}
            index={index}
            title={step.title}
            text={step.text}
            Reverse={step.reverse}
            Coach={props.Coach}
          ></How>
        ))}
        
      </div>
    </div>
  );
};

export default HowToList;
