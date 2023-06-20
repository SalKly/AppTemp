"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const Card = ({ Coach, title, text, index }) => {
  return (
    <motion.div
      variants={fadeIn("top", "tween", 0.4, 1, true)}
      className="lg:w-1/3 flex"
    >
      <div
        className={`flex ${
          Coach ? "special-card-coach" : "special-card"
        } p-8 flex-col justify-start  h-full`}
      >

        <h3 className=" font-bold mb-4 v1:w-full v1:h-auto v2:h-[90px] v2:w-[80px]">{title}</h3>
        <p className=" font-light">{text}</p>
      </div>
    </motion.div>
  );
};

export default Card;
