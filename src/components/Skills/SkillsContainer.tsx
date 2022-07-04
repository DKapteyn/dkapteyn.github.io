import Skill from "./Skill";

export default function SkillsContainer() {
  return (
    <div className="flex flex-col w-full items-center  mt-8">
      <div>
        <h2 className="text-xl">Technical Skills</h2>
      </div>

      <div className="flex flex-col md:flex-row md:gap-8">
        <div className="skillIcon">
          <Skill
            skill="React"
            skillImg=".\images\logos\react-svgrepo-com.svg"
          />
        </div>
        <div className="skillIcon">
          <Skill
            skill="Javascript"
            skillImg=".\images\logos\javascript-logo-svgrepo-com.svg"
          />
          <Skill
            skill="Typescript"
            skillImg=".\images\logos\typescript-logo-svgrepo-com.svg"
          />
        </div>
        <div className="skillIcon">
          <Skill
            skill="Tailwind CSS"
            skillImg=".\images\logos\tailwindcss-icon-svgrepo-com.svg"
          />
          <Skill skill="Sass" skillImg=".\images\logos\sass-svgrepo-com.svg" />
        </div>
      </div>
    </div>
  );
}
