import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactUs() {
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
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="h-96 w-96 border-2 border-black rounded-2xl">
      <form
        className="flex flex-col text-xl text-center"
        ref={form}
        onSubmit={sendEmail}
      >
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input
          className="border-2 border-black w-max p-2 rounded-xl"
          type="submit"
          value="Send"
        />
      </form>
    </div>
  );
}
