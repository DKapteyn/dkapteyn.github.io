import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import { IconContext } from "react-icons";

export default function Navbar() {
  const [dropDown, setDropDown] = useState(false);

  return (
    <div className="text-white bg-black w-screen fixed text-xl flex justify-between sm:px-24 px-4 h-12 items-center z-20 ">
      <h2>David Kapteyn</h2>
      <div>
        <nav
          className={`md:flex gap-4 md:flex-row flex-col bg-black h-max  md:bg-inherit
        ${
          dropDown === false
            ? "hidden"
            : "absolute top-0 bottom-0 right-0 flex flex-col w-1/3  gap pt-5 pl-4 pb-6 rounded-md md:static"
        }`}
        >
          {dropDown === true && (
            <div className="md:hidden w-full flex justify-end pr-5">
              <div
                onClick={() => setDropDown(false)}
                className={` border-[1px] rounded-md p-1 w-max flex items-start cursor-pointer  `}
              >
                <FiX />
              </div>
            </div>
          )}
          <Link onClick={() => setDropDown(false)} to={"/"}>
            Home
          </Link>
          <Link onClick={() => setDropDown(false)} to={"/about"}>
            About
          </Link>
          <Link onClick={() => setDropDown(false)} to={"/projects"}>
            Projects
          </Link>
          <Link onClick={() => setDropDown(false)} to={"/contact"}>
            Contact
          </Link>
        </nav>

        <div
          className="md:hidden cursor-pointer"
          onClick={() => setDropDown(true)}
        >
          <IconContext.Provider value={{ size: "1.25em" }}>
            <FiMenu />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
}
