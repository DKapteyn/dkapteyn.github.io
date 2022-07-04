import AboutCard from "../components/About/AboutCard";
import Button from "../components/Button";
import { motion } from "framer-motion";
import SkillsContainer from "../components/Skills/SkillsContainer";

export default function AboutPage() {
  return (
    <div className="backgroundImage lg:bg-left grid place-content-center pl-2 ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className=" h-full w-screen lg:w-9/12 xl:w-8/12 ml-auto "
      >
        <AboutCard />
        <SkillsContainer />
        <div className="flex justify-center mt-6 lg:mt-6 mb-8">
          <Button link="/projects" text="See what I've done" />
        </div>
      </motion.div>
    </div>
  );
}
