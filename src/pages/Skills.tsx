import CursorHover from "../components/CursorHover";
import SectionHeader from "../components/SectionHeader";
import { SKILLS } from "../utils/constants";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  const container =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement>;

  return (
    <div id="skills" className="w-full pt-[4rem]" ref={container}>
      <SectionHeader title={t("skills")} titleTwo={t("skillsIntro")} />
      <div className="skills">
        <div className="flex gap-3 flex-wrap items-center justify-center">
          {SKILLS?.map((skill, i: number) => (
            <CursorHover key={i} className="skill">
              <div className="w-36 sm:w-48 aspect-square bg-secondary/20 p-3 grid place-items-center">
                <div
                  className="logo w-10 sm:w-16"
                  dangerouslySetInnerHTML={{ __html: skill.logo }}
                ></div>

                <h6 className="name text-xl sm:text-2xl font-txt pt-1 text-center">
                  {skill.title}
                </h6>
              </div>
            </CursorHover>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
