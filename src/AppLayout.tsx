import { useEffect, useRef } from "react";
import Navbar from "./features/Navbar";
import Sidebar from "./features/Sidebar";
import useColorMode from "./context/useColorMode";
import { ModeEnum } from "./types/types";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CustomMouse from "./features/CustomMouse";

import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./features/Footer";
import Home from "./pages/Home";
import Menu from "./features/Menu";
import "./i18next";
import { useTranslation } from "react-i18next";

const AppLayout = () => {
  const { i18n } = useTranslation();
  const { mode } = useColorMode();
  const container =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement>;
  gsap.registerPlugin(useGSAP);
  useGSAP(
    () => {
      gsap.from(".nav", { translateY: "-100%", duration: 1 });
    },
    { scope: container }
  );
  useEffect(() => {
    if (i18n.language == "ar") document.documentElement.dir = "rtl";
    else document.documentElement.dir = "ltr";
    return () => {};
  }, [i18n.language]);

  return (
    <div
      ref={container}
      className="w-full relative cursor-none select-none flex flex-col"
    >
      <div
        className={`w-full bg-primary absolute top-0 start-0 -z-50 transition-all duration-[1s] ${
          mode === ModeEnum.DARK ? "h-full" : "h-0"
        }`}
      ></div>
      <div className="nav w-full h-16 bg-primary sticky top-0 z-[100]">
        <Navbar />
      </div>

      <Sidebar />
      <Menu />
      <div className="w-full min-h-[calc(100vh-4rem)] px-3 pb-32 relative">
        <div className="h-full w-full overflow-hidden flex flex-col gap-5 items-center justify-center sm:ps-20">
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </div>
      <Footer />
      <CustomMouse />
    </div>
  );
};

export default AppLayout;
