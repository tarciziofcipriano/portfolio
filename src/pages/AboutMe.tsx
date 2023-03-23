import { Box, Slide } from "@mui/material";
import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <Slide direction="down" in mountOnEnter unmountOnExit>
      <Box>{t("TEXT.ABOUT_ME")}</Box>
    </Slide>
  );
};

export default AboutMe;
