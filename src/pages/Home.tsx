import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import CursorHover from "../components/CursorHover";
import Button from "../components/Button";
import { FaDownload } from "react-icons/fa";
import { useTranslation } from "react-i18next";
const Home = () => {
  const { t, i18n } = useTranslation();
  const arr = Array.from({ length: 25 }, (_, i) => i);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Taha_Mahmoud_Noureldin_CV.pdf";
    link.download = "Taha_Mahmoud_Noureldin_CV.pdf";
    link.click();
  };
  // ANIMATIONS
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const nameChars: gsap.TweenTarget[] = gsap.utils.toArray(".name");
    const imgSquares: gsap.TweenTarget[] = gsap.utils.toArray(".img-square");

    nameChars.forEach((char, i) =>
      gsap.from(char, {
        translateY: "-100%",
        opacity: 0,
        duration: 0.5,
        delay: 0.2 * i,
      }),
    );

    imgSquares.forEach((square, i) =>
      gsap.from(square, { opacity: 0, duration: 0.5, delay: 0.3 * i }),
    );

    gsap.from(".profile-img", {
      scale: 1.3,
      scrollTrigger: {
        trigger: ".profile-img",
        scrub: true,
        start: "top 50%",
        end: "bottom center",
      },
    });

    gsap.from(".home-title", { opacity: 0, translateY: "50%", duration: 1 });
  });

  return (
    <div
      id="home"
      className="home w-full min-h-[calc(100vh-4rem)] flex flex-col xl:flex-row"
    >
      <div className="flex-1 min-h-[calc(100vh-4rem)] p-5 flex flex-col gap-5 justify-center">
        <CursorHover>
          <div className="home-title text-[48px] md:text-7xl font-name text-secondary/80 leading-none">
            <div className="text-4xl">{t("im")}</div>
            <div className="flex text-8xl font-black text-secondary">
              {i18n.language === "en" ? (
                <>
                  <div className="name">T</div>
                  <div className="name">A</div>
                  <div className="name">H</div>
                  <div className="name">A</div>
                </>
              ) : (
                <>
                  <div className="name">ط</div>
                  <div className="name">ـه</div>
                </>
              )}
            </div>
            <div className="uppercase">{t("jobTitle")}</div>
          </div>
        </CursorHover>
        <div className="flex flex-wrap gap-4 sm:gap-5 ">
          <Button
            props={{
              onClick: () => {
                window.location.href = "#projects";
              },
            }}
          >
            {t("projects")}
          </Button>
          <Button
            className="flex gap-1 sm:gap-3 items-center px-1"
            props={{
              onClick: handleDownload,
            }}
          >
            {t("downloadCV")} <FaDownload />
          </Button>
        </div>
      </div>
      <hr className="bg-secondary" />
      <div className="flex-1 grid place-items-center p-5">
        <div className="bg-secondary/50 w-full md:w-[480px] xl:w-[320xp] xxl:w-[480px] aspect-square">
          <CursorHover className="w-full h-full">
            <div className="w-full h-full grid grid-cols-5 grid-rows-5 relative group overflow-hidden">
              <div className="w-full h-full absolute top-0 start-0">
                <img
                  src="/profile.jpg"
                  alt=""
                  className="profile-img w-full h-full overflow-hidden object-cover object-center grayscale-[100%] transition-all duration-500 group-hover:grayscale-0"
                />
              </div>
              {arr.map((i) => (
                <div
                  key={i}
                  className={`z-10 transition-colors duration-700 ${
                    i % Math.ceil(Math.random() * 10) == 0 &&
                    ![1, 2, 3, 6, 7, 8, 11, 12, 13, 16, 17, 18].includes(i)
                      ? "bg-primary img-square"
                      : ""
                  }`}
                ></div>
              ))}
            </div>
          </CursorHover>
        </div>
      </div>
    </div>
  );
};

export default Home;
