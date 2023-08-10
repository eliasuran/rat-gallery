import { useEffect, useState } from "react";
import Nav from "@/components/Nav";
import Header from "@/components/header";
import SmallHeader from "@/components/small-header";
import Button from "@/components/button";
import ScrollNotif from "@/components/Scroll-notif";
import WelcomeSection from "@/components/Welcome";
import Footer from "@/components/Footer";
import Rain from "@/components/Rain";

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
      <section className="min-h-screen bg-bg flex flex-col justify-center items-center">
        <Rain />
        {showNav && <Nav />}
        <div className="w-96 min-h-screen flex flex-col justify-center items-center gap-12 text-center mt-24">
          <Header text="Rat Gallery" />
          <SmallHeader text="A gallery of rats" />
          <Button text="view gallery" link="/gallery" />
          <ScrollNotif />
        </div>
      </section>
      <WelcomeSection />
      <Footer />
    </div>
  );
}
