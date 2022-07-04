import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm({ setModalOpen, setModalContent }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pviswj9",
        "template_sm1ndf8",
        form.current,
        "HjEOV0u1lTe5hSdJT"
      )
      .then(setModalOpen(true))
      .then(
        (result) => {
          setModalContent("success");
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          setModalContent("failed");
          console.log(error.text);
        }
      );
  };

  return (
    <div className="xs:w-[33.125rem]  h-[34.375rem] w-full py-3 px-2 rounded-3xl drop-shadow-md bg-black bg-opacity-5 shadow-lg">
      <p className="flex justify-center mb-6  text-center text-2xl">
        Contact me
      </p>

      <form
        className="flex flex-col text-center"
        ref={form}
        onSubmit={sendEmail}
      >
        <label>Name</label>
        <input className="formText" type="text" name="user_name" />
        <label>Email</label>
        <input className="formText " type="email" name="user_email" required />
        <label>Message</label>
        <textarea className="formText h-48" name="message" required />
        <div>
          <input
            className=" shadow-md  bg-[#b0b0ab]
            w-40   p-2 rounded-xl cursor-pointer active:scale-95"
            type="submit"
            value="Send"
            onClick={() => setModalContent("")}
          />
        </div>
      </form>
    </div>
  );
}
