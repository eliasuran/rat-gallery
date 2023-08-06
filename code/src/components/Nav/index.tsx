import { motion } from "framer-motion";
import Items from "@/components/Nav/items";

interface Props {
  close: () => void;
  open: () => void;
  state: boolean;
}

const Nav = ({ close, open, state }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 right-0 m-10 pr-4 flex gap-8 h-8 text-text italic font-semibold z-50"
    >
      <Items link="/" text="Home" />
      <Items link="/gallery" text="Gallery" />
      <Items onClick={() => (state ? close() : open())} text="About" />
      <a href="/">
        <img src={"/img/logo.png"} className="h-full cursor-pointer" />
      </a>
    </motion.div>
  );
};

export default Nav;
