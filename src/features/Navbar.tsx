import MenuIcon from "../components/MenuIcon";
import ColorModeIcon from "../components/ColorModeIcon";
import clsx from "clsx";
import useChangeLanguage from "../hooks/useChangeLanguage";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { changeLanguage } = useChangeLanguage();
  const { i18n } = useTranslation();

  return (
    <div
      dir="ltr"
      className="w-full h-full flex items-center justify-between overflow-hidden"
    >
      <div className="logo bg-primary ps-3 h-full flex items-center">
        <div className="font-name text-3xl sm:text-4xl font-black">{`<TAHA />`}</div>
      </div>

      <div
        className={clsx(
          "flex items-center gap-5 sm:gap-7 bg-primary h-full px-7",
        )}
      >
        <div className="bg-secondary rounded-full text-primary text-sm md:text-lg">
          {i18n.language == "en" ? (
            <span
              className="py-1 px-2"
              onClick={() => {
                changeLanguage("ar");
              }}
            >
              العربية
            </span>
          ) : (
            <span
              className="py-1 px-2"
              onClick={() => {
                changeLanguage("en");
              }}
            >
              English
            </span>
          )}
        </div>
        <ColorModeIcon />
        <MenuIcon />
      </div>
    </div>
  );
};

export default Navbar;
