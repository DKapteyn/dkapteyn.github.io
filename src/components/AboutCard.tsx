import React from "react";
import AboutImg from "./AboutImg";
import AboutText from "./AboutText";

export default function AboutCard() {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-center">
      <AboutImg myPicture="./images/squarehead.jpg" />

      <div className="w-2/3">
        <AboutText />
      </div>
    </div>
  );
}
