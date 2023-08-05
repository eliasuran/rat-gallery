import { motion } from "framer-motion";

interface Props {
  text: string;
}

const SmallHeader = ({ text }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <h1
        className="uppercase text-text text-3xl drop-shadow-sm shadow-primary font-Barlow-Bold"
        id="shadow2"
      >
        {text}
      </h1>
    </motion.div>
  );
};

export default SmallHeader;
