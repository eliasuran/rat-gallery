import { motion } from "framer-motion";
import Backdrop from "../Backdrop";
import { useDispatch } from "react-redux";
import { closeModal } from "@/redux/modalSlice";

interface Props {
  header: string;
}

const dropIn = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.1, type: "string", damping: 25, stiffness: 500 },
  },
  exit: { y: "200vh", opacity: 0 },
};

export default function Modal({ header }: Props) {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeModal());
  };
  return (
    <Backdrop
      onClick={() => {
        handleClose();
      }}
    >
      <motion.div
        className="overflow-hidden w-1/2 h-1/2 bg-primary text-text rounded-lg flex flex-col justify-center text-center gap-4 z-50"
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <h1 className="text-7xl font-semibold font-Berlin">{header}</h1>
        <div className="w-full h-80 flex justify-around items-center">
          <img
            className="w-full"
            src="https://cdn.7tv.app/emote/62e700220529159003a21db8/4x.webp"
            alt="wiggling rat"
          />
        </div>
      </motion.div>
    </Backdrop>
  );
}
