import React from "react";
import { motion } from "framer-motion";

interface Props {
  text: string;
  link: string;
}

const Button = ({ text, link }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: "-100vw" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.5,
        delay: 1.1,
        type: "spring",
        stiffness: 400,
        damping: 30,
      }}
    >
      <a href={link}>
        <motion.button
          id="button"
          className="bg-accent text-primary font-Barlow-Light font-bold px-4 py-2 text-lg rounded-md uppercase"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {text}
        </motion.button>
      </a>
    </motion.div>
  );
};

export default Button;
