import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const { t } = useTranslation();

  return <Box>{t("TEXT.ABOUT_ME")}</Box>;
};

export default AboutMe;
