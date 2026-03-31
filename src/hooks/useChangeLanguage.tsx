import { useTranslation } from "react-i18next";

const useChangeLanguage = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (lng: "ar" | "en") => {
    i18n.changeLanguage(lng);
    localStorage.setItem("portfolio-lng", lng); // Save language in localStorage
  };
  return { changeLanguage: changeLanguage };
};

export default useChangeLanguage;
