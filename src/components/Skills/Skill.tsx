import { skillT } from "../../types";

export default function Skill({ skill, skillImg }: skillT) {
  return (
    <div className="flex w-20 text-center items-center font-bold flex-col justify-center  mt-4 ">
      <img className="h-20 " src={skillImg} alt={skill} />
      <span className="mt-4 h-12">{skill}</span>
    </div>
  );
}
