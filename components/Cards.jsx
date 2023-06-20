"use client";
import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../utils/motion";
import Card from "./Card";
import { cardText } from "../constants";

const Cards = (props) => {
  return (
    <div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        className="w-[100vw]  sm:p-16 xs:p-8 px-6 py-12 relative z-10"
      >
        <div className="flex flex-col lg:flex-row  justify-center gap-10 items-stretch">
          {cardText.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              text={card.text}
              Coach={props.Coach}
              index={index}
            />
          ))}

        </div>
      </motion.div>
    </div>
  );
};

export default Cards;
