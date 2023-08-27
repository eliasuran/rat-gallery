import { motion } from "framer-motion";

const TopContainer = () => {
  return (
    <div className="h-2/5 flex">
      <div id="about-top" className="w-2/3 h-full bg-xddgang"></div>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="xl:w-1/3 md:w-2/3 w-full h-full flex flex-col justify-end sm:mr-0 mr-4"
      >
        <h2 className="text-text font-Barlow-Bold text-xl">Rat Gallery</h2>
        <h1 id="shadow" className="text-text font-Berlin text-9xl">
          TEAM
        </h1>
      </motion.div>
    </div>
  );
};

export default TopContainer;
