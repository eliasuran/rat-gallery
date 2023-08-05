import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Nav from "@/components/Nav";
import Items from "@/components/Nav/items";
import Header from "@/components/header";
import Button from "@/components/button";
import Modal from "@/components/Modal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => setModalOpen(false);
  const openModal = () => setModalOpen(true);

  return (
    <main className="h-screen overflow-hidden bg-bg flex flex-col justify-center items-center">
      <Nav>
        <div></div>
        <Items
          onClick={() => (modalOpen ? closeModal() : openModal())}
          text="About"
        />
      </Nav>
      <div className="w-96 h-full flex flex-col justify-center items-center gap-12 text-center">
        <Header text="Rat Gallery" />
        <Button text="Head to the gallery" link="/gallery" />
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
    </main>
  );
}
