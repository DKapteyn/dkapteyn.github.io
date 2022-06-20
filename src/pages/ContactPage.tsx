import ContactForm from "../components/ContactForm.jsx";
import Modal from "../components/Modal";
import { useState } from "react";

export default function ContactPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className=" backgroundImage  lg:bg-left pt-20">
      <div className="grid place-items-center   pb-4 h-full w-screen lg:w-10/12 ml-auto ">
        <ContactForm setModalOpen={setModalOpen} />
        <Modal setModalOpen={setModalOpen} modalOpen={modalOpen} />
      </div>
    </div>
  );
}
