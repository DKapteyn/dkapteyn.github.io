import ContactForm from "../components/ContactForm.jsx";

export default function ContactPage() {
  return (
    <div className=" backgroundImage  lg:bg-left">
      <div className="grid place-content-center h-screen w-screen lg:w-10/12 ml-auto ">
        <ContactForm />
      </div>
    </div>
  );
}
