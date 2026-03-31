import SectionHeader from "../components/SectionHeader";

import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import HorizontalSocials from "../components/HorizontalSocials";
import { t } from "i18next";

const Contact = () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(useGSAP);
  const container =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement>;
  useGSAP(
    () => {
      gsap.from(".left-sec-txt", {
        opacity: 0,
        y: 100,
        scrollTrigger: {
          trigger: ".left-sec-txt",
          start: "top bottom",
          end: "bottom 80%",
          scrub: true,
        },
      });
      // gsap.from(".right-sec", {
      //   xPercent: 50,
      //   scrollTrigger: {
      //     trigger: ".right-sec",
      //     start: "top bottom",
      //     end: "center 80%",
      //     scrub: true,
      //   },
      // });
    },
    { scope: container },
  );
  return (
    <div id="contact" className="pt-[4rem]" ref={container}>
      <SectionHeader title={t("lets_work")} titleTwo={t("contact_me")} />
      <div className="flex flex-col xl:flex-row  gap-x-16 gap-y-24">
        <div className="w-full h-auto flex-1 flex flex-col gap-16 justify-evenly">
          <p className="left-sec-txt text-xl sm:text-2xl font-txt text-secondary/90">
            {t("collaboration_message")}
          </p>
          <HorizontalSocials />
        </div>
        {/* <div className="right-sec flex-1">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="text-xl flex flex-col gap-3"
          >
            <CustomInput
              type="text"
              id="name"
              label="Name"
              register={register("name", {
                required: "your name must be > 3 chars and < 20 chars",
                maxLength: 20,
                minLength: 3,
              })}
            />
            <CustomInput
              label="Email"
              type="email"
              id="email"
              register={register("email", {
                required: true,
              })}
            />

            <CustomInput
              label="Message"
              type="message"
              id="message"
              register={register("message", {
                required: true,
                minLength: 3,
              })}
            />

            <div className="flex justify-between">
              <Button
                props={{ type: "submit" }}
                className="flex gap-3 items-center"
              >
                Send <BiSend />
              </Button>
              <CursorHover className="flex items-center">
                <a
                  href="https://alvarotrigo.com/blog/web-developer-portfolio-examples/"
                  target="_blank"
                  rel="noopener"
                  className="flex items-center gap-1"
                >
                  <MdEmail /> send me mail
                </a>
              </CursorHover>
            </div>
          </form>
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
