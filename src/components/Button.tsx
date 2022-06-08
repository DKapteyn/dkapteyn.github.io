import { Link } from "react-router-dom";
import { buttonT } from "../types";

export default function Button({ writing, link }: buttonT) {
  return (
    <div className=" rounded-lg grid place-items-center text-base w-40 h-12 border-2 border-[#586369]">
      <Link to={link}>{writing}</Link>
    </div>
  );
}
