import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Nav from "@/components/Nav";
import Items from "@/components/Nav/items";
import Header from "@/components/header";
import SmallHeader from "@/components/small-header";
import Button from "@/components/button";
import Modal from "@/components/Modal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => setModalOpen(false);
  const openModal = () => setModalOpen(true);

  return (
    <div className="overflow-x-hidden flex flex-col">
      <section className="h-screen bg-bg flex flex-col justify-center items-center">
        <Nav>
          <div></div>
          <Items
            onClick={() => (modalOpen ? closeModal() : openModal())}
            text="About"
          />
        </Nav>
        <div className="w-96 h-full flex flex-col justify-center items-center gap-12 text-center">
          <Header text="Rat Gallery" />
          <SmallHeader text="A gallery of rats" />
          <Button text="to gallery" link="/gallery" />
        </div>

        <AnimatePresence initial={false} mode="wait">
          {modalOpen && (
            <Modal
              header="HEADER HEADER"
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
