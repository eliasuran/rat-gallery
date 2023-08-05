import { motion } from "framer-motion";
import Backdrop from "../Backdrop";

interface Props {
  handleClose: () => void;
  header: string;
  text: string;
}

const dropIn = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: {
    y: "0",
    opacity: 1,
    transition: { duration: 0.1, type: "string", damping: 25, stiffness: 500 },
  },
  exit: { y: "100vh", opacity: 0 },
};

export default function Modal({ handleClose, header, text }: Props) {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        className="w-1/2 h-1/2 bg-primary text-text rounded-lg flex flex-col justify-center text-center gap-4"
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <h1 className="text-5xl font-semibold">{header}</h1>
        <h2>{text}</h2>
      </motion.div>
    </Backdrop>
  );
}
