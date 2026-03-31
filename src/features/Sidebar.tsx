import { useGSAP } from "@gsap/react";
import CursorHover from "../components/CursorHover";
import { CONTACT_LINKS } from "../utils/constants";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";

const Sidebar = () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(useGSAP);

  const sidebar =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement>;
  useGSAP(() => {
    gsap.from(".sidebar", { translateX: "-100%", duration: 1 });
  });
  useGSAP(
    () => {
      const socials: gsap.TweenTarget[] = gsap.utils.toArray(".social");
      socials.forEach((social, i) => {
        gsap.from(social, {
          translateX: "-100px",
          duration: 1,
          delay: i * 0.2,
        });
      });
    },
    { scope: sidebar },
  );
  return (
    <div
      ref={sidebar}
      className="sidebar hidden sm:block fixed h-[calc(100vh-4rem)] top-[4rem] start-0 ps-2 sm:ps-7 z-[100]"
    >
      <div className="w-full h-full flex flex-col items-center justify-center gap-10 py-14 text-3xl">
        <div className="h-full w-[1px] bg-secondary"></div>
        <ul className="flex flex-col items-center justify-center gap-3">
          {CONTACT_LINKS.map((link, i: number) => (
            <CursorHover key={i} className="social">
              <li>
                <a href={link.link} target="_blank" rel="noopener noreferrer">
                  {link.icon}
                </a>
              </li>
            </CursorHover>
          ))}
        </ul>
        <div className="h-full w-[1px] bg-secondary"></div>
      </div>
    </div>
  );
};

export default Sidebar;
