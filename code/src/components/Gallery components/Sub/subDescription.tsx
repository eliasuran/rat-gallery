import Button from "../../Universal/button";
import Link from "next/link";
import { motion } from "framer-motion";

interface Props {
  title: string;
  text: string;
}

const SubDescription = ({ title, text }: Props) => {
  return (
    <div className="w-96 h-4/5 p-4 flex flex-col gap-4 text-text font-Berlin break-words">
      <h2 className="text-5xl uppercase">{title}</h2>
      <span className="text-xl">{text}</span>
      <Link href={`/gallery/${title}`}>
        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="z-10 text-text border border-text font-Barlow-Light font-bold px-4 py-2 text-lg rounded-md uppercase overflow-hidden hvr-radial-out"
        >
          VIEW
        </motion.button>
      </Link>
    </div>
  );
};

export default SubDescription;
