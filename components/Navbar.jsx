"use client";
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import Image from "next/image";
import LogoAthlete from '../public/images/logo/LogoAthlete.svg'
import LogoCoach from '../public/images/logo/LogoCoach.svg'
import Link from "next/link";


const Navbar = (props) => (
  <div>

  <motion.div
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className="sm:px-16 px-6 py-4 " >
    <div >
    <Link href={props.Coach?'/coach':'/'}>
    <Image  placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAAyCAYAAACqECmXAAAAu0lEQVR42u3VMQ0AMAgAsKF8Pzc28MiFCJLWRCOr/wMATguhA4DQAQChAwBCBwCEDgBCBwCEDgAIHQAQOgAIHQAQOgAgdABA6AAgdABA6ACA0AEAoQOA0AEAoQMAQgcAhA4AQgcAhA4ACB0AEDoACB0AEDoAIHQAQOgAIHQAQOgAgNABAKEDgNABAKEDAEIHAIQOAEIHAIQOAAgdABA6AAhd6AAgdABA6ACA0AEAoQOA0AEAoQMAQgcA1gAumHKnLUkH+gAAAABJRU5ErkJggg=="
 className=' w-[350px]' src={props.Coach?LogoCoach:LogoAthlete} alt="Logo"></Image>
    </Link>
    </div>
      
  </motion.div>
  </div>
);

export default Navbar;
