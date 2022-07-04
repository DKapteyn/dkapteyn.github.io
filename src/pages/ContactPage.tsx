import ContactForm from "../components/Contact/ContactForm.jsx";
import Modal from "../components/Modal";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  return (
    <div className=" backgroundImage  lg:bg-left grid items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid place-items-center ml-auto mb-16 pb-4 h-full w-screen md:6/12 lg:w-10/12  "
      >
        <ContactForm
          setModalOpen={setModalOpen}
          setModalContent={setModalContent}
        />
        <Modal
          setModalOpen={setModalOpen}
          modalOpen={modalOpen}
          content={modalContent}
        />
      </motion.div>
    </div>
  );
}
