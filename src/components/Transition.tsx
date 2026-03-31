import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Transition = ({ children }: { children: React.ReactNode }) => {
  const container =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement>;
  gsap.registerPlugin(useGSAP);
  useGSAP(
    () => {
      const tar = gsap.utils.toArray(".banner").reverse();
      gsap.to(tar, {
        height: 0,
        duration: 1,
        stagger: 0.33,
      });
    },
    { scope: container }
  );

  return (
    <main ref={container} className="w-full h-full relative">
      <div className="banner w-1/3 h-full bg-green-400 absolute start-0"></div>
      <div className="banner w-1/3 h-full bg-red-400 absolute start-1/3"></div>
      <div className="banner w-1/3 h-full bg-blue-400 absolute start-2/3"></div>
      {children}
    </main>
  );
};

export default Transition;
