"use client";
import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import elipse from "../public/images/left-elipse.png";
import elispeRight from "../public/images/right-elipse.png";
import Image from "next/image";
import Link from "next/link";
import { readyText } from "../constants";

const Ready = (props) => {
  return (
    <div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="w-[100vw] py-12 relative z-10 "
      >
        <div className="flex flex-col lg:flex-row  justify-center items-center gap-10 relative z-10">
          <div className="left-0 absolute z-0">
            <Image
              placeholder="blur"
              src={elipse}
              alt="elipse"
              className="w-[150px] lg:w-[100%]"
            />
          </div>
          <div className="w-[100%] ">
            <div className="flex flex-col justify content items-center ">
              <motion.div
                variants={fadeIn("top", "tween", 0.2, 1, true)}
                className="flex-[0.75] flex justify-center flex-col items-center mb-[30px]"
              >
                <h2 className="items-center text-center font-bold px-2  md:w-[80%]">
                  <span
                    className={`${
                      props.Coach ? "outlined-text-coach" : "outlined-text "
                    }  `}
                  >
                    ready
                  </span>{" "}
                  TO START YOUR journey
                </h2>
              </motion.div>
              <h3 className="items-center text-center px-4 md:w-[60%] mb-[70px]">
                {readyText.text}
              </h3>
            </div>
            <div className="flex flex-col justify-center items-center mb-6 z-10">
              <div className=" flex relative w-[700px] justify-center">
                <Link href={`${props.Coach ? "/coach/form" : "/form"}`}>
                  <motion.button
                    variants={fadeIn("top", "spring", 0.4, 1, true)}
                    className={`${
                      props.Coach ? "join-us-button-coach" : "join-us-button"
                    }  join-us-button-lg lg:w-[400px] w-[210px] px-4 py-2 z-10`}
                  >
                    JOIN NOW
                  </motion.button>
                </Link>
                <motion.div className="absolute z-0 top-10 left-80 pointer-events-none">
                  <span
                    className={`${
                      props.Coach ? "h1-variant-coach" : "h1-variant"
                    } lg:text-[55px] text-[35px]`}
                  >
                    JOIN NOW
                  </span>
                </motion.div>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center">
              <div className="flex flex-col justify-center items-center">
                <p className="text-center p-8">
                  Not an {props.Coach ? "Coach" : "Athlete"}?{" "}
                  <Link
                    href={`${props.Coach ? "/" : "/coach"}`}
                    className={`${
                      props.Coach ? "text-[#ff5349]" : "text-[#74B4ED]"
                    } `}
                  >
                    CLICK HERE
                  </Link>{" "}
                  to go to the {props.Coach ? "Athlete's Page" : "Coach's Page"}
                </p>
              </div>
            </div>
          </div>

          <div className="right-0 absolute z-0">
            <Image
              placeholder="blur"
              src={elispeRight}
              alt="elipse"
              className="w-[150px] lg:w-[100%]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Ready;
