import React from "react";
import HomeMain from "../components/HomeMain";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import Button from "../components/Button";
import { IconContext } from "react-icons";

export default function HomePage() {
  return (
    <div className="backgroundImage lg:bg-left grid place-content-center ">
      <HomeMain />
      <div className=" flex gap-4 mt-6">
        <Button text="Check out my work" link={"/projects"} />
        <Button text="Contact me" link={"/contact"} />
      </div>
      {/*throws parsing issue but is still best practive to have size in relative units for accessibility */}
      <IconContext.Provider value={{ color: "#586369", size: "2rem" }}>
        <div className="flex gap-6 mt-6 justify-center">
          <a
            href="https://github.com/DKapteyn"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-black/20 rounded-full"
          >
            <BsGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/david-kapteyn-11b4b361/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-black/20 rounded-full"
          >
            <BsLinkedin />
          </a>
        </div>
      </IconContext.Provider>
    </div>
  );
}
