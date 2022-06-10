import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="text-white bg-black w-screen fixed text-xl flex justify-between px-24 h-12 items-center z-20 ">
      <h2>David Kapteyn</h2>
      <div>
        <nav className="flex gap-4">
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/projects"}>Projects</Link>
          <Link to={"/contact"}>Contact</Link>
        </nav>
      </div>
    </div>
  );
}
