"use client";
import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import TextAnimation from "../utils/textAnimation";
import Image from "next/image";
import bottle from "../public/images/heroImg.png";
import dumble from "../public/images/dumble2.png";
import heroCoach from "../public/images/heroCoach.svg";
import Link from "next/link";
import { heroText } from "../constants";

const Hero = (props) => {
  return (
    <div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="w-[100vw]  mb-24  px-2 sm:px-14 lg:pr-32  lg:pl-14 py-12 relative z-10 flex flex-col-reverse lg:flex-row  items-center  justify-between"
      >
        <div className="flex flex-col items-center text-center lg:text-start lg:items-start mt-16  w-[100%] lg:w-[50%]  ">
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="flex justify-center flex-col  mb-4"
          >
            <h1 className="lg:w-[80%]">
              <span
                className={`${
                  !props.Coach
                    ? "outlined-text-shape"
                    : "outlined-text-coach-shape"
                }`}
              >
                {heroText.outlinedText}
              </span>{" "}
              {heroText.title}
            </h1>
          </motion.div>
          <div className="w-[80%]">
            <TextAnimation textStyle="paragraph" text={heroText.text} />
          </div>
          <div className="flex flex-col mt-14  gap-6">
            <Link href={`${props.Coach ? "/coach/form" : "/form"}`}>
              <motion.button
                variants={fadeIn("right", "spring", 0.4, 1)}
                className={`${
                  props.Coach ? "join-us-button-coach " : "join-us-button  "
                } lg:w-[300px]  w-[300px] px-4 py-2`}
              >
                JOIN US
              </motion.button>
            </Link>
            <Link href={`${props.Coach ? "/" : "/coach"}`}>
              <motion.button
                variants={fadeIn("right", "spring", 0.6, 1)}
                className={`${
                  props.Coach ? "athlete-button" : "coach-button"
                } lg:w-[300px]  w-[300px] px-4 py-2`}
              >
                FOR {props.Coach ? "ATHLETES" : "COACHES"}
              </motion.button>
            </Link>
          </div>
        </div>

        <div className="relative ">
          {props.Coach ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: -10000 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                delay: 0.4,
                type: "spring",
                bounce: 20,
                stiffness: 40,
              }}
              className="relative"
            >
              <Image
                src={heroCoach}
                alt="bottle"
                quality={100}
                priority={true}
                className="bottle mb-[10%] w-[350px] lg:w-[600px] animate-FlyAnim"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAAyCAYAAACqECmXAAAAu0lEQVR42u3VMQ0AMAgAsKF8Pzc28MiFCJLWRCOr/wMATguhA4DQAQChAwBCBwCEDgBCBwCEDgAIHQAQOgAIHQAQOgAgdABA6AAgdABA6ACA0AEAoQOA0AEAoQMAQgcAhA4AQgcAhA4ACB0AEDoACB0AEDoAIHQAQOgAIHQAQOgAgNABAKEDgNABAKEDAEIHAIQOAEIHAIQOAAgdABA6AAhd6AAgdABA6ACA0AEAoQOA0AEAoQMAQgcA1gAumHKnLUkH+gAAAABJRU5ErkJggg=="
              />
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: -10000 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                delay: 0.4,
                type: "spring",
                bounce: 20,
                stiffness: 40,
              }}
              className="relative"
            >
              <Image
                src={bottle}
                alt="bottle"
                quality={100}
                className="bottle mb-[10%] w-[350px] lg:w-[500px]"
                placeholder="blur"
                priority={true}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.5, y: -10000 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  delay: 0.5,
                  type: "spring",
                  bounce: 20,
                  stiffness: 30,
                }}
                className="w-[100%]  absolute  left-[20%] lg:left-[40%] bottom-[-13%] "
              >
                <Image
                  src={dumble}
                  alt="dumble"
                  className="dumble w-[250px] lg:w-[400px]"
                  placeholder="blur"
                  priority={true}
                />
              </motion.div>
            </motion.div>
          )}

          {/* <Image
            src={cloud}
            alt="cloud"
            className="cloud w-[25%] h-[40%]"

          />

          <Image
            src={cloud}
            alt="cloud"
            className="cloud2 w-[20%] h-[40%]"

          /> */}
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
