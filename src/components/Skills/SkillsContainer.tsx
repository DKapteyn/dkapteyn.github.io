import Skill from "./Skill";

export default function SkillsContainer() {
  return (
    <div className="grid place-items-center mt-8">
      <div>
        <h2 className="text-xl">Technical Skills</h2>
      </div>
      <div className="flex gap-8">
        <Skill skill="React" skillImg=".\images\logos\react-svgrepo-com.svg" />
        <Skill
          skill="Javascript"
          skillImg=".\images\logos\javascript-logo-svgrepo-com.svg"
        />
        <Skill
          skill="Typescript"
          skillImg=".\images\logos\typescript-logo-svgrepo-com.svg"
        />
        <Skill
          skill="Tailwind CSS"
          skillImg=".\images\logos\tailwindcss-icon-svgrepo-com.svg"
        />
        <Skill skill="Sass" skillImg=".\images\logos\sass-svgrepo-com.svg" />
      </div>
    </div>
  );
}
