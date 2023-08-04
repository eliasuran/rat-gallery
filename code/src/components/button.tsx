import React from "react";
import { motion } from "framer-motion";

interface Props {
  text: string;
  link: string;
}

const Button = ({ text, link }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <a href={link}>
        <motion.div
          initial={{ scale: 1 }}
          animate={{
            scale: 1.3,
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="bg-primary text-text p-4 text-xl rounded-md uppercase font-bold hover:bg-text hover:text-bg duration-500"
        >
          {text}
        </motion.div>
      </a>
    </motion.div>
  );
};

export default Button;
