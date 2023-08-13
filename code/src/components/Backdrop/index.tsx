import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  onClick: () => void;
}

const Backdrop = ({ children, onClick }: Props) => {
  return (
    <motion.div
      className="absolute inset-0 h-screen overflow-hidden bg-[#00000071] flex justify-center items-center z-40"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
