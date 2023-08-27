import { AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import Header from "@/components/Universal/header";
import SmallHeader from "@/components/Universal/small-header";
import Button from "@/components/Universal/button";
import ScrollNotif from "@/components/Scroll-notif";
import Rain from "@/components/Rain";
import Modal from "@/components/Modal";
import { useEffect } from "react";

export default function HomeSection() {
  const modalState = useSelector((state: any) => state.modalReducer.modalState);
  useEffect(() => {
    if (modalState) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [modalState]);
  return (
    <section className="min-h-screen bg-bg flex flex-col justify-center items-center">
      <AnimatePresence initial={false} mode="wait">
        {modalState && <Modal header="Laget av Elias 2IT" />}
      </AnimatePresence>
      <Rain />
      <div className="w-96 min-h-screen flex flex-col justify-center items-center gap-12 text-center mt-24">
        <Header text="Rat Gallery" />
        <SmallHeader text="A gallery of rats" />
        <Button text="view gallery" link="/gallery" />
        <ScrollNotif />
      </div>
    </section>
  );
}
