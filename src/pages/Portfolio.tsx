import { Box, Slide } from "@mui/material";
import { useTranslation } from "react-i18next";

const AboutThePortfolio = () => {
  const { t } = useTranslation();

  return (
    <Slide direction="down" in mountOnEnter unmountOnExit>
      <Box>{t("TEXT.PORTFOLIO")}</Box>
    </Slide>
  );
};

export default AboutThePortfolio;
