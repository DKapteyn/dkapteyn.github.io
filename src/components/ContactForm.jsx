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
        },
        (error) => {
          setModalContent("failed");
          console.log(error.text);
        }
      );
  };

  return (
    <div className="w-[33.125rem] h-[34.375rem] py-3  rounded-3xl drop-shadow-md shadow-md bg-[#d6dadd]">
      <p className="flex justify-center mb-6  ">
        Hope you enjoyed my site. It would be great to hear from you!
      </p>

      <form
        className="flex flex-col text-center"
        ref={form}
        onSubmit={sendEmail}
      >
        <label>Name</label>
        <input
          className="formText"
          type="text"
          name="user_name"
          placeholder="What's your name?"
          required
        />
        <label>Email</label>
        <input
          className="formText "
          type="email"
          name="user_email"
          placeholder="How can I connect with you?"
          required
        />
        <label>Message</label>
        <textarea
          className="formText h-48"
          name="message"
          placeholder="Anything to say?"
          required
        />
        <div>
          <input
            className=" shadow-md  bg-[#b0b0ab]
            w-40   p-2 rounded-xl cursor-pointer "
            type="submit"
            value="Send"
            onClick={() => setModalContent("")}
          />
        </div>
      </form>
    </div>
  );
}
