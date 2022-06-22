import Button from "../components/Button";
import Project from "../components/Project";

export default function ProjectPage() {
  return (
    <div className="backgroundImage  ">
      <div className="flex lg:flex-row flex-col xl:w-screen  2xl:w-9/12  ml-auto  gap-8 lg:gap-0 justify-center items-center">
        <Project
          title="Coffee Marketing Site"
          para="This 3 page marketing website includes dynamic styling and an 
          interactive ordering form. It also includes a checkout page that updates based on the input of the user. "
          framework="React"
          skills={["Javascript", "Sass", "HTML5"]}
          img="/images/Coffee Marketing Site2.png"
          github="https://github.com/DKapteyn/Coffee-website"
          website="https://dkapteyn.github.io/Coffee-website/"
        />
        <Project
          title="Space Info Site"
          para="This 8 page information app uses a data.js file to generate the pages with reusable components. Each page is fully interctive and updates colors and pictures depending on user input. This project includes dynamic styling and animations."
          framework="React"
          skills={["Javascript", "Sass", "HTML5"]}
          img="/images/planet-app.png"
          github="https://github.com/DKapteyn/Planet-info-site"
          website="https://dkapteyn.github.io/Planet-info-site/"
        />
        <Project
          title="Interactive Comment Section"
          para='This comment section is a full "CRUD" application with the ability to create, edit and delete your 
          comments.'
          framework="React"
          skills={["Typescript", "Tailwind", "HTML5"]}
          img="/images/commentSection.png"
          github="https://github.com/DKapteyn/comment-section"
          website="https://dkapteyn.github.io/comment-section/"
        />
      </div>

      <div className=" 2xl:w-9/12 xl:w-screen ml-auto flex justify-center lg:mb-2 mt-5  pb-5  ">
        <Button
          text="More Projects Available on Github"
          a="https://github.com/DKapteyn"
        />
      </div>
    </div>
  );
}
