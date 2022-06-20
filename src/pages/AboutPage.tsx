import AboutCard from "../components/AboutCard";
import Button from "../components/Button";

export default function AboutPage() {
  return (
    <div className="backgroundImage lg:bg-left grid place-content-center pl-2 ">
      <div className=" h-full w-screen md:w-9/12 lg:w-8/12 ml-auto ">
        <AboutCard />
        <div className="flex justify-center mt-6 lg:mt-10 mb-8">
          <Button link="/projects" text="See what I've done" />
        </div>
      </div>
    </div>
  );
}
