import { AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import Header from "@/components/Universal/header";
import SmallHeader from "@/components/Universal/small-header";
import Button from "@/components/Universal/button";
import ScrollNotif from "@/components/Scroll-notif";
import Rain from "@/components/Rain";
import Modal from "@/components/Modal";

export default function HomeSection() {
  const modalState = useSelector((state: any) => state.modalReducer.modalState);
  return (
    <section className="min-h-screen bg-bg flex flex-col justify-center items-center">
      <AnimatePresence initial={false} mode="wait">
        {modalState && <Modal header="easter egg for nå" />}
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
