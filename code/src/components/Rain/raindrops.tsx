import { motion } from "framer-motion";
import { useState } from "react";

const RainDrop = () => {
  const minInitialY = -200;
  const maxInitialY = -10;
  const randomInitialYNumber = Math.floor(
    Math.random() * (maxInitialY - minInitialY + 1) + minInitialY
  );
  const randomInitialY = randomInitialYNumber.toString() + "vh";

  const minInitialX = 0;
  const maxInitialX = 100;
  const randomInitialXNumber = Math.floor(
    Math.random() * (maxInitialX - minInitialX + 1) + minInitialX
  );
  const randomInitialX = randomInitialXNumber.toString() + "vw";
  return (
    <motion.div
      initial={{ y: randomInitialY }}
      animate={{ y: "150vh", rotate: 180 }}
      transition={{ duration: 5, repeat: Infinity }}
      className={`absolute`}
      style={{ left: randomInitialX }}
    >
      <img src="/img/xdd.png" alt="raindrop" className="w-full h-full" />
    </motion.div>
  );
};

export default RainDrop;

/* IDEER TIL HVA SOM KAN GJØRES
 - GJØRE AT RAINDROPSA SPAWNER PÅ EN RANDOM X VERDI
 - RANDOM ROTASJON VALUE
 - RANDOM SPEED INNENFOR EN RANGE
*/
