import React from "react";

export default function AboutText() {
  return (
    <div>
      <h3 className="text-2xl mb-2">Who am I?</h3>
      <div className="flex items-center ">
        <span className="mr-4 text-lg">
          I'm David Kapteyn, Frontend Developer
        </span>
        <img
          className="h-12 w-12"
          src="./images/waving-hand-emoji-clipart-md.png"
          alt="waving hand"
        />
      </div>
      <p>
        Ever since my first “Hello World” I have been fascinated to see what I
        can make for the web. Since then I have been working towards building
        more and more interesting projects with different technologies.
        Including React, Javascript, Typescript, Tailwind, Sass, CSS3 and HTML5.
        It has been wonderful to be able to make beautiful and responsive
        projects. I am excited to keep moving forward and to work on bigger
        things.
      </p>
    </div>
  );
}
