import MenuIcon from "../components/MenuIcon";
import ColorModeIcon from "../components/ColorModeIcon";
import clsx from "clsx";
import useChangeLanguage from "../hooks/useChangeLanguage";

const Navbar = () => {
  const { changeLanguage } = useChangeLanguage();
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
        <div className="bg-red-500 p-1 rounded-full overflow-hidden">
          <span
            className="bg-green-300 py-1 px-2 rounded-l-full"
            onClick={() => {
              changeLanguage("ar");
            }}
          >
            ar
          </span>
          <span
            className="bg-blue-300 py-1 px-2 rounded-r-full"
            onClick={() => {
              changeLanguage("en");
            }}
          >
            en
          </span>
        </div>
        {/* <button
          onClick={() => {
            if (i18n.language == "en") i18n.changeLanguage("ar");
            else i18n.changeLanguage("en");
          }}
        >
          safdas
        </button> */}
        <ColorModeIcon />
        <MenuIcon />
      </div>
    </div>
  );
};

export default Navbar;
