import SectionHeader from "../components/SectionHeader";
import { PROJECTS } from "../utils/constants";
import Project from "../features/Project";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <div id="projects" className="w-full pt-[4rem]">
      <div className="">
        <SectionHeader title={t("projects")} titleTwo={t("my_projects")} />
        <div className="flex flex-wrap gap-3 items-stretch justify-center w-full h-full">
          {PROJECTS.map((project, i) => (
            <Project key={i} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
