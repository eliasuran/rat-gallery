import { AnimatePresence } from "framer-motion";
import Items from "@/components/Nav/page-links";
import Link from "next/link";
import { useState, useEffect } from "react";
import Burger from "./../svg/burger";
import Dropdown from "./dropdown";

const Nav = () => {
  const [dropdown, setDropdown] = useState(false);
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

  useEffect(() => {
    if (dropdown) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [dropdown]);
  return (
    <div
      className={`fixed right-0 xs:pr-4 pr-0 h-24 w-screen flex justify-end text-text italic font-semibold z-50 duration-500 bg-bg ${
        scrollingDown ? "top-0" : "-top-[24vh]"
      }`}
    >
      <div className="xs:flex gap-8 hidden m-10">
        <Items link="/" text="Home" />
        <Items link="/gallery" text="Gallery" />
        <Items link="/about" text="About" />
        <Link href="/">
          <img
            src={"/img/logo.png"}
            alt="official rat gallery logo"
            className="h-10 cursor-pointer"
          />
        </Link>
      </div>
      <div
        className={`z-50 fixed left-0 w-full h-20 p-4 xs:hidden flex justify-between items-center bg-bg duration-500 ${
          scrollingDown ? "top-0" : "-top-[24vh]"
        }`}
      >
        <Link href="/">
          <img
            src={"/img/logo.png"}
            alt="official rat gallery logo"
            className="h-14 cursor-pointer"
          />
        </Link>
        <Burger dropdown={dropdown} setDropdown={setDropdown} />
      </div>
      <AnimatePresence>{dropdown && <Dropdown />}</AnimatePresence>
    </div>
  );
};

export default Nav;
