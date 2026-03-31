import { useContext, useRef } from "react";
import { useMoveElementAsMouse } from "../hooks/useMoveElementAsMouse";
import { DotMouseContext } from "../context/DotMouseContext";

const CustomMouse = () => {
  const { isFull } = useContext(DotMouseContext);

  const mouse =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement>;
  const dot =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement>;

  useMoveElementAsMouse<HTMLDivElement>({
    element: mouse,
    callback: (element, e) => {
      element.style.left = `${e.clientX}px`;
      element.style.top = `${e.clientY}px`;
    },
  });

  useMoveElementAsMouse<HTMLDivElement>({
    element: dot,
    callback: (dotElement, e) => {
      dotElement.animate(
        { left: `${e.clientX}px`, top: `${e.clientY}px` },
        { duration: 500, fill: "forwards" },
      );
    },
  });

  return (
    <>
      <div
        className="w-10 aspect-square rounded-full border border-secondary fixed pointer-events-none left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1000]"
        ref={mouse}
      ></div>
      <div
        ref={dot}
        className={`dot aspect-square rounded-full bg-secondary fixed z-[1000] pointer-events-none left-1/2 -translate-x-1/2 -translate-y-1/2 ${
          isFull ? "w-6 mix-blend-difference" : "w-3"
        }`}
      ></div>
    </>
  );
};

export default CustomMouse;
