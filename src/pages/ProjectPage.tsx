import Button from "../components/Button";
import Project from "../components/Project";

export default function ProjectPage() {
  return (
    <div className="backgroundImage ">
      <div className="flex w-9/12 h-max ml-auto gap-6  justify-center">
        <Project />
        <Project />
        <Project />
      </div>
      <div className="w-9/12 ml-auto flex justify-center mt-12 ">
        <Button writing="See More Projects" link="" />
      </div>
    </div>
  );
}
