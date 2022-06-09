import { useState } from "react";
import { IconContext } from "react-icons";
import { FiGithub } from "react-icons/fi";
import { FiLink } from "react-icons/fi";

export default function Project() {
  const [linksOn, setLinksOn] = useState(false);

  return (
    <div
      onMouseEnter={() => setLinksOn(true)}
      onMouseLeave={() => setLinksOn(false)}
      className="relative grid w-[330px] h-max border-2 border-darkGrey rounded-md mt-20"
    >
      <div>
        <img src="\IMG_3133.JPG" alt="project" />
        <div>
          <h6>title</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
            laboriosam maiores illum natus reprehenderit ex sapiente laudantium
          </p>
          <ul className="flex gap-4 justify-center mt-8 mb-4">
            <li className="listItem">HTML5</li>
            <li className="listItem">CSS</li>
            <li className="listItem">REACT</li>
          </ul>
        </div>
      </div>

      {linksOn && (
        <div className="absolute grid place-content-center bg-darkGrey/60 top-0 bottom-0 right-0 left-0">
          <IconContext.Provider value={{ color: "white", size: "2rem" }}>
            <div className="flex gap-8">
              <div className=" has-tooltip border-2 border-white rounded-full p-2 cursor-pointer">
                <span className="tooltip rounded shadow-lg p-1 bg-darkGrey/90 border-2 border-white text-white -mt-[4.5rem] w-[3.5rem] text-xs">
                  Click for Github Code
                </span>
                <FiGithub />
              </div>
              <div className=" has-tooltip border-2 border-white rounded-full p-2 cursor-pointer">
                <span className="tooltip rounded shadow-lg p-1 bg-darkGrey/90 border-2 border-white text-white -mt-[4.5rem] w-[3.5rem] text-xs">
                  Click for Project Page
                </span>
                <FiLink />
              </div>
            </div>
          </IconContext.Provider>
        </div>
      )}
    </div>
  );
}
