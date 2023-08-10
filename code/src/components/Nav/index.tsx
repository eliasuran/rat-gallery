import { motion } from "framer-motion";
import Items from "@/components/Nav/page-links";
import { useSelector, useDispatch } from "react-redux";
import { setNav0, setNav1, setNav2 } from "@/redux/navSlice";

interface Props {}

const Nav = ({}: Props) => {
  const { navValue } = useSelector((state: any) => state.navReducer);
  const dispatch = useDispatch();

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 right-0 m-10 pr-4 flex gap-8 h-8 text-text italic font-semibold z-50 "
    >
      <Items
        onClick={() => {
          dispatch(setNav0());
        }}
        link="/"
        text="Home"
        {...(navValue === 0 && {
          selectedStyle: "border-b-2 border-text",
        })}
      />
      <Items
        onClick={() => {
          dispatch(setNav1());
        }}
        link="/gallery"
        text="Gallery"
        {...(navValue === 1 && {
          selectedStyle: "border-b-2 border-text",
        })}
      />
      <Items
        onClick={() => {
          dispatch(setNav2());
        }}
        link="/about"
        text="About"
        {...(navValue === 2 && {
          selectedStyle: "border-b-2 border-text",
        })}
      />
      <a href="/">
        <img src={"/img/logo.png"} className="h-full cursor-pointer" />
      </a>
    </motion.div>
  );
};

export default Nav;
