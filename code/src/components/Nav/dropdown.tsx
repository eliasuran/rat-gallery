import { motion } from "framer-motion";
import Links from "./page-links";

interface Props {
  setDropdown?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Dropdown = ({ setDropdown }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: "-25vh" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-25vw" }}
      transition={{ duration: 0.3 }}
      className="w-screen h-screen fixed top-0 left-0 bg-bg/95 z-40 xs:hidden"
    >
      <div className="mt-24 flex flex-col p-8 gap-4">
        <Links setDropdown={setDropdown} link="/" text="Home" />
        <Links setDropdown={setDropdown} link="/gallery" text="Gallery" />
        <Links setDropdown={setDropdown} link="/about" text="About" />
      </div>
    </motion.div>
  );
};

export default Dropdown;
