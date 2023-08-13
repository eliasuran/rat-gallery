import { useEffect, useState } from "react";
import Nav from "@/components/Nav";
import HomeSection from "@/components/Home";
import WelcomeSection from "@/components/Welcome";
import Footer from "@/components/Footer";

export default function Home() {
  const [showNav, setShowNav] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const controlNav = () => {
    const scrollThreshold = window.innerHeight / 2;
    const scrollY = window.scrollY;
    if (scrollY < scrollThreshold || scrollY < prevScrollPos) {
      setShowNav(true);
    } else if (scrollY > scrollThreshold) {
      setShowNav(false);
    }
    setPrevScrollPos(scrollY);
    console.log(prevScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNav);
    return () => {
      window.removeEventListener("scroll", controlNav);
    };
  }, []);

  return (
    <div className="overflow-hidden flex flex-col">
      {showNav && <Nav />}
      <HomeSection />
      <WelcomeSection />
      <Footer />
    </div>
  );
}
