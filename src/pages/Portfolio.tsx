import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";

const AboutThePortfolio = () => {
  const { t } = useTranslation();

  return <Box>{t("TEXT.PORTFOLIO")}</Box>;
};

export default AboutThePortfolio;
