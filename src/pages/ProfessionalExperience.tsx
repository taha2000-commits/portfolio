import { useTranslation } from "react-i18next";
import Button from "../components/Button";

const ProfessionalExperience = () => {
  const { t } = useTranslation();

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/CERTIFICATE-OF-PROFESSIONAL-EXPERIENCE-Taha.pdf";
    link.download = "CERTIFICATE-OF-PROFESSIONAL-EXPERIENCE-Taha.pdf";
    link.click();
  };
  return (
    <div id="professional-experience" className="w-full pt-[4rem]">
      <div className="w-full h-full">
        <h2 className="title text-5xl xs:text-6xl sm:text-7xl font-black font-name">
          {t("professionalExperience")}
        </h2>
        <h5 className="text-xl font-name pb-5">{t("jobTitle")}</h5>
        <div className="w-1/2 h-px bg-secondary mb-5" />
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <h5 className="text-lg">{t("company")}:</h5>
          <div className="flex items-center gap-x-10 gap-y-3 flex-wrap">
            <h6 className="text-2xl">{"DarkMon CyberSecurity Ltd"}</h6>
            <Button
              className="text-xs sm:text-sm"
              props={{
                onClick: handleDownload,
              }}
            >
              Download COPE
            </Button>
          </div>
        </div>
        <div className="flex items-end gap-2 mb-3">
          <h5 className="text-lg">{t("startDate")}:</h5>
          <h6 className="text-2xl">{"2024-9"}</h6>
        </div>
        <div className="flex items-end gap-2 mb-3">
          <h5 className="text-lg">{t("endDate")}:</h5>
          <h6 className="text-xl">{"2025-3"}</h6>
        </div>
        <p className=" text-lg font-txt text-secondary/90">
          {t("professional-experience-description")}
        </p>
      </div>
    </div>
  );
};

export default ProfessionalExperience;
