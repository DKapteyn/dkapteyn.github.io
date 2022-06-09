import React from "react";

export default function Project() {
  return (
    <div className="relative grid w-[330px] h-max border-2 border-[#586369] rounded-md mt-6">
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
      <div className="absolute bg-[#586369]/70 top-0 bottom-0 right-0 left-0"></div>
    </div>
  );
}
