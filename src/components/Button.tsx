import { Link } from "react-router-dom";
import { buttonT } from "../types";

export default function Button({ writing, link, a }: buttonT) {
  return (
    <div
      className=" rounded-lg grid place-items-center leading-none text-base w-40 h-12 border-2 border-[#586369] text-center 
    hover:scale-105 hover:border-black "
    >
      {a && (
        <a href={a} target="_blank" rel="noopener noreferrer">
          {writing}
        </a>
      )}
      {link && <Link to={link}>{writing}</Link>}
    </div>
  );
}
