import SectionHeader from "../components/SectionHeader";
import { PROJECTS } from "../utils/constants";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Project from "../features/Project";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);
  const container =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement>;
  useGSAP(
    () => {
      const projects: gsap.DOMTarget[] = gsap.utils.toArray(".project-card");
      projects.forEach((project) => {
        gsap.from(project, {
          y: 100,
          x: -200,
          opacity: 0,
          scrollTrigger: {
            trigger: project,
            scrub: true,
            start: "top bottom",
            end: "top bottom",
          },
        });
      });
    },

    { scope: container },
  );
  return (
    <div id="projects" className="w-full pt-[4rem]" ref={container}>
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
