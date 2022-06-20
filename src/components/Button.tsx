import { Link } from "react-router-dom";
import { buttonT } from "../types";

export default function Button({ writing, link, a }: buttonT) {
  return (
    <>
      {a && (
        <a
          className="button"
          href={a}
          target="_blank"
          rel="noopener noreferrer"
        >
          {writing}
        </a>
      )}

      {link && (
        <Link className="button" to={link}>
          {writing}
        </Link>
      )}
    </>
  );
}
