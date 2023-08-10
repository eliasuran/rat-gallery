import Button from "@/components/button";
import { useState } from "react";
import Modal from "../Modal";

export default function Welcome() {
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false), console.log("xdd");
  };
  const openModal = () => {
    setModalOpen(true), console.log("xdd");
  };

  return (
    <section
      id="welcome"
      className="min-h-screen bg-xdd bg-local bg-cover -z-20"
    >
      {modalOpen && (
        <Modal header="xdd" modalOpen={modalOpen} handleClose={closeModal} />
      )}
      <div className="absolute h-screen w-screen bg-[#110915ec] -z-10"></div>
      <div className="z-10 m-36 flex">
        <div className="text-text w-1/2 flex flex-col gap-12">
          <h1 id="shadow" className="text-8xl font-Berlin">
            Introduction
          </h1>
          <span className="font-Barlow-Bold text-xl w-1/2">
            Welcome to the Rat Gallery: a unique and captivating destination
            that offers an unconventional yet enchanting experience for all who
            step through its doors. Discover all the wonders that the Rat has to
            offer, and maybe you will learn something new about our small fuzzy
            friends. xdd we rise
          </span>
          <Button text="view gallery" link="/gallery" />
        </div>
        <div id="welcome-seperator" className="w-1 relative"></div>
        <div className="w-1/2 flex justify-center items-center">
          <div
            id="rat-examples"
            className="w-96 h-64 z-50"
            onClick={() => (modalOpen ? closeModal() : openModal())}
          >
            <img
              className="w-full h-full border-2 rounded-md border-accent relative z-10"
              src={"/img/xdd.png"}
              alt="rat"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
