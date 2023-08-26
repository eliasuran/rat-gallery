import { motion } from "framer-motion";

const BurgerSVG = ({ dropdown, setDropdown }) => (
  <motion.svg
    transition={{ type: "tween", duration: 0.3 }}
    onClick={() => setDropdown(!dropdown)}
    className="cursor-pointer left-[-100vw]"
    xmlns="http://www.w3.org/2000/svg"
    width={60}
    height={60}
    fill="none"
    viewBox="0 0 24 24"
  >
    <g stroke="#f6f1f9" strokeLinecap="round" strokeWidth={1.5}>
      <path d="M4 7h3m13 0h-9M20 17h-3M4 17h9M4 12h16" />
    </g>
  </motion.svg>
);
export default BurgerSVG;
