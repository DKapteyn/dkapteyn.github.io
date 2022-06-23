import { useState, useId } from "react";
import { IconContext } from "react-icons";
import { FiGithub } from "react-icons/fi";
import { FiLink } from "react-icons/fi";
import { projectT } from "../types";

export default function Project({
  title,
  para,
  skills,
  img,
  github,
  website,
  framework,
}: projectT) {
  const [linksOn, setLinksOn] = useState(false);

  const id = useId();

  return (
    <div
      onMouseEnter={() => setLinksOn(true)}
      onMouseLeave={() => setLinksOn(false)}
      className="relative flex xl:w-[25rem] h-[35rem] max-w-[30rem] shadow-lg bg-[#d6dadd]
      rounded-md mx-3"
    >
      <div className="flex  flex-col justify-between px-2">
        <div className="flex flex-col items-center ">
          <div className=" xl:h-48 h-max">
            <img className="mt-2 rounded-md" src={img} alt="project" />
          </div>
          <h4 className="text-xl font-bold mt-3 mb-3">{title}</h4>
          <p className="text-center mb-4 ">{para}</p>
        </div>
        <div className="flex flex-col items-center mt-2 h-32 mb-max-10">
          <p className="font-bold mb-2">Skills used in this project</p>
          {framework && <p className="listItem mb-2">{framework}</p>}
          <ul
            className={`flex gap-4 justify-center ${
              framework === undefined ? "pt-6" : ""
            } `}
          >
            {skills.map((skill, index) => (
              <li key={`${id}-${index}`} className="listItem">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {linksOn && (
        <div className="absolute grid place-content-center rounded-md bg-black/40 top-0 bottom-0 right-0 left-0">
          {/*throws parsing issue but is still best practive to have size in relative units for accessibiliy */}
          <IconContext.Provider value={{ color: "white", size: "2rem" }}>
            <div className="flex gap-8 text-center">
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className=" has-tooltip border-2 border-white rounded-full p-2 cursor-pointer"
              >
                <span className="tooltip">Github Code</span>
                <FiGithub />
              </a>
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className=" has-tooltip border-2 border-white rounded-full p-2 cursor-pointer"
              >
                <span className="tooltip ">Project Page</span>
                <FiLink />
              </a>
            </div>
          </IconContext.Provider>
        </div>
      )}
    </div>
  );
}
