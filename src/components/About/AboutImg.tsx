import { AboutImgT } from "../../types";

export default function AboutImg({ myPicture }: AboutImgT) {
  return (
    <div className=" relative rounded-full h-48 w-48  overflow-hidden  shadow-lg border-darkGrey border-2 grid place-items-center">
      <img className=" h-full  " src={myPicture} alt="head shot" />
    </div>
  );
}
