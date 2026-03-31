import { t } from "i18next";
import Button from "../components/Button";
import { ProjectType } from "../types/types";

const Project = ({ project }: { project: ProjectType }) => {
  return (
    <div className="project-card w-full  min-w-[220px] max-w-[320px] p-2 overflow-hidden bg-secondary/20 relative group rounded-xl transition-all duration-[3s] flex flex-col justify-between">
      <div className="w-full h-[200px] rounded-xl overflow-hidden relative">
        <img
          src={project.img}
          alt=""
          className="w-full h-full object-cover bg-top"
        />
        <div className="w-9 aspect-square rounded-full overflow-hidden absolute top-4 start-4">
          <img
            src={project.logo}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="hidden group-hover:grid w-full h-full absolute top-0 start-0 place-items-center bg-secondary/20">
          <Button className="text-3xl font-name font-black text-primary">
            <a href={`${project.visite_link}`} target="_blank">
              {t("visit")}
            </a>
          </Button>
        </div>
      </div>
      <h5 dir="ltr" className="text-3xl from-black font-name py-4 text-center">
        {project.name}
      </h5>
      <div className="transition-all flex flex-col gap-5 overflow-hidden">
        <div className="flex flex-wrap items-center justify-center gap-1">
          {project.technologies.map((technology, i) => (
            <div
              key={i}
              className="w-7"
              dangerouslySetInnerHTML={{ __html: technology?.logo }}
            ></div>
          ))}
        </div>
        <div className="">
          <Button className="w-full rounded-xl">{t("show_details")}</Button>
        </div>
      </div>
    </div>
  );
};

export default Project;
