import Button from "../components/Button";
import Project from "../components/Project";

export default function ProjectPage() {
  return (
    <div className="backgroundImage ">
      <div className="flex lg:w-9/12 h-max ml-auto gap-6  justify-center">
        <Project
          title="Coffee Marketing Site"
          para="This three page site shows design and includes active animation and includes a price calculation and checkout"
          skills={["HTML5", "Sass", "React"]}
          img="/images/Coffee Marketing Site.png"
          github="https://github.com/DKapteyn/Coffee-website"
          website="https://dkapteyn.github.io/Coffee-website/"
        />
        <Project
          title="Space Info Site"
          para="This three page includes animations and is based off a single data object"
          skills={["HTML5", "Sass", "React"]}
          img="/images/Coffee Marketing Site.png"
          github="https://github.com/DKapteyn/Coffee-website"
          website="https://dkapteyn.github.io/Coffee-website/"
        />
        <Project
          title="Coffee Marketing Site"
          para="This three page site shows design and includes active animation and includes a price calculation and checkout"
          skills={["HTML5", "Sass", "React"]}
          img="/images/Coffee Marketing Site.png"
          github="https://github.com/DKapteyn/Coffee-website"
          website="https://dkapteyn.github.io/Coffee-website/"
        />
      </div>
      <div className="lg:w-9/12 ml-auto flex justify-center mt-12 ">
        <Button writing="See More Projects" link="" />
      </div>
    </div>
  );
}
