import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { openModal } from "@/redux/modalSlice";

const RainDrop = () => {
  const dispatch = useDispatch();

  const minInitialY: number = -200;
  const maxInitialY: number = -10;
  const minInitialX: number = 10;
  const maxInitialX: number = 90;
  const minInitialRotate: number = -360;
  const maxInitialRotate: number = 360;

  const randomInitialYNumber: number = Math.floor(
    Math.random() * (maxInitialY - minInitialY + 1) + minInitialY
  );

  const randomInitialXNumber: number = Math.floor(
    Math.random() * (maxInitialX - minInitialX + 1) + minInitialX
  );

  const randomInitialRotateNumber: number = Math.floor(
    Math.random() * (maxInitialRotate - minInitialRotate + 1) + minInitialRotate
  );

  const randomInitialYString: string = randomInitialYNumber.toString() + "vh";
  const randomInitialXString: string = randomInitialXNumber.toString() + "vw";

  const [randomInitialY, setRandomInitialY] = useState(randomInitialYString);
  const [randomInitialX, setRandomInitialX] = useState(randomInitialXString);
  const [randomInitialRotate, setRandomInitialRotate] = useState(
    randomInitialRotateNumber
  );

  useEffect(() => {
    const onAnimationComplete = () => {
      const randomInitialYNumber = Math.floor(
        Math.random() * (maxInitialY - minInitialY + 1) + minInitialY
      );

      const randomInitialXNumber = Math.floor(
        Math.random() * (maxInitialX - minInitialX + 1) + minInitialX
      );

      const randomInitialRotateNumber: number = Math.floor(
        Math.random() * (maxInitialRotate - minInitialRotate + 1) +
          minInitialRotate
      );

      const randomInitialYString = randomInitialYNumber.toString() + "vh";
      const randomInitialXString = randomInitialXNumber.toString() + "vw";

      setRandomInitialY(randomInitialYString);
      setRandomInitialX(randomInitialXString);
      setRandomInitialRotate(randomInitialRotateNumber);
    };
    const animationTimeout = setTimeout(() => {
      onAnimationComplete();
    }, 5000);
    return () => clearTimeout(animationTimeout);
  }, [randomInitialX, randomInitialY, randomInitialRotate]);

  return (
    <motion.div
      onClick={() => {
        dispatch(openModal());
      }}
      initial={{ y: randomInitialY }}
      animate={{ y: "150vh", rotate: randomInitialRotate }}
      transition={{ duration: 5, repeat: Infinity }}
      className="absolute"
      style={{ left: randomInitialX }}
    >
      <img src="/img/xdd.png" alt="raindrop" className="w-full h-full" />
    </motion.div>
  );
};

export default RainDrop;
