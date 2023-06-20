"use client";
import { motion } from "framer-motion";
import { footerVariants } from "../utils/motion";
import twitter from '../public/images//twitter.svg'
import instagram from '../public/images/instagram.svg'
import facebook from '../public/images/facebook.svg'
// import tiktok from '../public/images/tiktok.svg'
import Image from "next/image";

const socials = [
  {
    name: "twitter",
    src:twitter,
    url: "https://twitter.com/steven_dege",
  },

];

const Footer = () => (
  <div>

  <div
 
    className="sm:p-16 xs:p-8 px-6 py-12 relative "
  >
    <div className="footer-gradient" />

    <div className="2xl:max-w-[1280px] w-full mx-auto flex flex-col gap-8">
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div
          className="flex flex-wrap items-center justify-between
          gap-4"
        >
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2023 BrandName. All rights reserved.
          </p>
          <div className="flex gap-4">
            {socials.map((social) => (
              <a key={social.name}  href={social.url}>
              <Image
                src={social.src}
                alt={social.name}
                className="w-[24px] h-[24px] 
                object-contain cursor-pointer"
              />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
);

export default Footer;
