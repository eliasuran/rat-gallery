import { useEffect, useState } from "react";
import Nav from "@/components/Nav";
import HomeSection from "@/components/Home";
import WelcomeSection from "@/components/Welcome";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="overflow-hidden flex flex-col">
      <Nav />
      <HomeSection />
      <WelcomeSection />
      <Footer />
    </div>
  );
}
