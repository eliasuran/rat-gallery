import { motion } from "framer-motion";

const Header = () => {
  return (
    <div
      className="relative h-96 flex text-text font-Berlin"
      id="gallery-header"
    >
      <div className="w-1/2 flex justify-center items-center">
        <h1 className="text-9xl" id="shadow">
          GALLERY
        </h1>
      </div>
      <motion.div
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="w-1/2 flex items-center justify-center text-center text-3xl mt-12"
      >
        <h2>
          View the diverse selection of <br /> rats we have to offer!
        </h2>
      </motion.div>
    </div>
  );
};

export default Header;
