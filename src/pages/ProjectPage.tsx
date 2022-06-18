import Button from "../components/Button";
import Project from "../components/Project";

export default function ProjectPage() {
  return (
    <div className="backgroundImage  ">
      <div className="flex lg:flex-row flex-col xl:w-screen  2xl:w-9/12  ml-auto lg:pt-10  justify-center items-center">
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
          para="This 8 page information app uses a data object file to generate the pages with reusable components. This project also includes dynamic styling and animations "
          skills={["HTML5", "Sass", "React"]}
          img="/images/planet-app.png"
          github="https://github.com/DKapteyn/Planet-info-site"
          website="https://dkapteyn.github.io/Planet-info-site/"
        />
        <Project
          title="Interactive Comment Section"
          para='This comment section is a full "CRUD" application with the ability to create, edit and delete your 
          comments'
          skills={["HTML5", "Tailwind", "Typescript", "React"]}
          img="/images/commentSection.png"
          github="https://github.com/DKapteyn/comment-section"
          website="https://dkapteyn.github.io/comment-section/"
        />
      </div>

      <div className=" 2xl:w-9/12 xl:w-screen ml-auto flex justify-center mt-12 pb-5  ">
        <Button
          writing="More Projects Available on Github"
          a="https://github.com/DKapteyn"
        />
      </div>
    </div>
  );
}
