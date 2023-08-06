import { motion } from "framer-motion";
import ArrowDownSVG from "../svg/arrow-down.jsx";

const downdown = {
  animate: {
    y: [0, 7, 0, 5, 0],
    transition: {
      repeat: Infinity,
      repeatDelay: 1,
      duration: 1,
    },
  },
};

const Notification = () => {
  return (
    <motion.div
      variants={downdown}
      initial="initial"
      animate="animate"
      className="h-8 w-full flex justify-center items-center mb-4"
    >
      <ArrowDownSVG />
    </motion.div>
  );
};

export default Notification;
