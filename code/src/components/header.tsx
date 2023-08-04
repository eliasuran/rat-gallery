import { motion } from "framer-motion";

interface Props {
  text: string;
}

const Header = ({ text }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1
        className="uppercase italic font-bold text-text text-9xl drop-shadow-sm shadow-primary"
        id="xdd"
      >
        {text}
      </h1>
    </motion.div>
  );
};

export default Header;
