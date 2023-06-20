import { motion } from "framer-motion";

const TextAnimation = ({text, textStyle}) => {
    return (
        <motion.div className={textStyle}>
          {text.split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.01, delay: index * 0.05 }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      );
};
export default TextAnimation;