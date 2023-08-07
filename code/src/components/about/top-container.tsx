import { motion } from "framer-motion";

const TopContainer = () => {
  return (
    <div className="h-2/5 flex">
      <div id="about-top" className="w-2/3 h-full bg-xddgang"></div>
      <div className="w-1/3 h-full flex items-end">
        <h1 id="shadow" className="text-text font-Berlin text-9xl">
          TEAM
        </h1>
      </div>
    </div>
  );
};

export default TopContainer;
