import { useState } from "react";
import Nav from "@/components/Nav";
import Header from "@/components/header";
import SmallHeader from "@/components/small-header";
import Button from "@/components/button";
import ScrollNotif from "@/components/Scroll-notif";
import WelcomeSection from "@/components/Welcome";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="overflow-hidden flex flex-col">
      <section className="min-h-screen bg-bg flex flex-col justify-center items-center">
        <Nav />
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
