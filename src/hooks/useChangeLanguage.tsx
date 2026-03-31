import { useTranslation } from "react-i18next";
import { useIsChangingLangContext } from "../context/IsChangingLangContext";

const useChangeLanguage = () => {
  const { i18n } = useTranslation();
  const { setIsChanging } = useIsChangingLangContext();
  const changeLanguage = (lng: "ar" | "en") => {
    setIsChanging(true);
    setTimeout(() => {
      i18n.changeLanguage(lng);
      setIsChanging(false);
    }, 1500);
    localStorage.setItem("portfolio-lng", lng); // Save language in localStorage
  };
  return { changeLanguage: changeLanguage };
};

export default useChangeLanguage;
