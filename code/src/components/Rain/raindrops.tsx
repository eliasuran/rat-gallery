import { motion } from "framer-motion";

const RainDrop = () => {
  return (
    <motion.div
      initial={{ y: "-100vh" }}
      animate={{ y: "100vh", rotate: 180 }}
      transition={{ duration: 5, repeat: Infinity }}
      className="absolute overflow-hidden"
    >
      <img src="/img/xdd.png" alt="raindrop" className="w-full h-full" />
    </motion.div>
  );
};

export default RainDrop;
