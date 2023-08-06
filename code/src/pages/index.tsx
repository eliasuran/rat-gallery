import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Nav from "@/components/Nav";
import Header from "@/components/header";
import SmallHeader from "@/components/small-header";
import Button from "@/components/button";
import ScrollNotif from "@/components/Scroll-notif";
import Modal from "@/components/Modal";

export default function Home() {
  const [navSelected, setNavSelected] = useState(0); // [0, 1, 2]

  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => setModalOpen(false);
  const openModal = () => setModalOpen(true);

  return (
    <div className="overflow-hidden flex flex-col">
      <section className="h-screen bg-bg flex flex-col justify-center items-center">
        <Nav close={closeModal} open={openModal} state={modalOpen} />
        <div className="w-96 h-full flex flex-col justify-center items-center gap-12 text-center">
          <Header text="Rat Gallery" />
          <SmallHeader text="A gallery of rats" />
          <Button text="view gallery" link="/gallery" />
          <ScrollNotif />
        </div>

        <AnimatePresence initial={false} mode="wait">
          {modalOpen && (
            <Modal
              header="TEAM"
              text="DOIWNJD9IUWHDNWUIDNHWIUDNWOIUDN"
              handleClose={closeModal}
            />
          )}
        </AnimatePresence>
      </section>
      <section className="h-screen bg-xdd bg-fixed bg-cover">
        <div className="absolute h-screen w-screen bg-[#110915ec]"></div>
      </section>
    </div>
  );
}
