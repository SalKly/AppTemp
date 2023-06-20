"use client";
import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import TextAnimation from "../utils/textAnimation";
import whyUsImg from "../public/images/img1.jpeg";
import Image from "next/image";
import Link from "next/link";
import { whyText } from "../constants";

const Why = (props) => {
  return (
    <div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="w-[100vw] h-[100%] sm:p-16 xs:p-8 px-6 py-12 relative z-10 flex flex-col items-end"
      >
        <div className="w-full h-50  mb-16 text-center lg:text-start">
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1, true)}
            className=" flex justify-center flex-col"
          >
            <h2 className="font-bold">
              <span
                className={`${
                  props.Coach ? "outlined-text-coach" : "outlined-text "
                } `}
              >
                Why
              </span>{" "}
              choose us{" "}
            </h2>
          </motion.div>
        </div>

        <div className="flex lg:justify-between gap-10 lg:flex-row flex-col-reverse     items-center lg:items-center   w-[100%]">
          <div className="flex flex-col  items-center text-center lg:items-start lg:text-start w-[100%] lg:w-[45%]  ">
            <motion.div
              variants={fadeIn("right", "tween", 0.4, 1, true)}
              className=" flex  mb-4 justify-center flex-col"
            >
              <h3> {whyText.title} </h3>
              <div className="lg:w-[90%] mt-4">
                <p>{whyText.text}</p>
              </div>
            </motion.div>

            <Link
              href={`${props.Coach ? "/coach/form" : "/form"}`}
              className="mt-6"
            >
              <motion.button
                variants={fadeIn("right", "spring", 0.4, 1, true)}
                className={`${
                  props.Coach ? " join-us-button-coach" : " join-us-button"
                } px-8`}
              >
                JOIN NOW
              </motion.button>
            </Link>
          </div>

          <div className="lg:w-[45%] md:w-[60%] w-[100%]  right-20">
            <motion.div
              variants={fadeIn("left", "tween", 0.3, 1, true)}
              className={`${props.Coach ? "how-img-div-coach" : "how-img-div"}`}
            >
              <Image
                src={whyUsImg}
                placeholder="blur"
                alt="img"
                className="how-img"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Why;
