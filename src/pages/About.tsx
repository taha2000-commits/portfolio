import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SectionHeader from "../components/SectionHeader";

import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  const container =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement>;
  useGSAP(
    () => {
      const ps: gsap.DOMTarget[] = gsap.utils.toArray(".aboutme");
      ps.forEach((p) => {
        gsap.fromTo(
          p,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: p,
              scrub: true,
              start: "top bottom",
              end: "top 40%",
            },
          }
        );
      });
    },
    { scope: container }
  );
  useGSAP(
    () => {
      const spans: gsap.DOMTarget[] = gsap.utils.toArray(".bold-span");

      spans.forEach((span) => {
        gsap.fromTo(
          span,
          {
            translateY: -10,
            opacity: 0,
            display: "inline-block",
          },
          {
            translateY: 0,
            opacity: 1,
            display: "inline-block",
            duration: 0.1,
            scrollTrigger: {
              trigger: span,
              scrub: true,
              start: "bottom bottom",
              end: "top 60%",
            },
          }
        );
      });
    },
    { scope: container }
  );

  return (
    <div id="about" className="w-full pt-[4rem]" ref={container}>
      <div className="w-full h-full">
        <SectionHeader title={t("aboutMe")} titleTwo={t("intro")} />
        <p
          className="aboutme text-xl font-txt text-secondary/90"
          dangerouslySetInnerHTML={{ __html: t("description") }}
        ></p>
        <p className="aboutme text-xl font-txt text-secondary/90">{t("cta")}</p>
      </div>
    </div>
  );
};

export default About;
