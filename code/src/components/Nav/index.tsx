import { motion } from "framer-motion";
import Items from "@/components/Nav/page-links";
import Link from "next/link";
import { useState, useEffect } from "react";

const Nav = () => {
  const [scrollingDown, setScrollingDown] = useState(true);

  useEffect(() => {
    const innerHeight = window.innerHeight;
    const screenHeight = innerHeight * 0.3;
    let lastScrollY = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > screenHeight && currentScrollY > lastScrollY) {
        setScrollingDown(false);
      } else {
        setScrollingDown(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 right-0 m-10 pr-4 h-8 flex gap-8 text-text italic font-semibold z-50 duration-500 ${
        scrollingDown ? "top-0" : "-top-[24vh]"
      }`}
    >
      <Items link="/" text="Home" />
      <Items link="/gallery" text="Gallery" />
      <Items link="/about" text="About" />
      <Link href="/">
        <img
          src={"/img/logo.png"}
          alt="official rat gallery logo"
          className="h-full cursor-pointer"
        />
      </Link>
    </motion.div>
  );
};

export default Nav;
