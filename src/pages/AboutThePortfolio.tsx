import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";

const AboutThePortfolio = () => {
  const { t } = useTranslation();

  return <Box>{t("TEXT.ABOUT_THE_PORTFOLIO")}</Box>;
};

export default AboutThePortfolio;
