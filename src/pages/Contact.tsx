import { Box, Slide } from "@mui/material";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <Slide direction="down" in mountOnEnter unmountOnExit>
      <Box>{t("TEXT.CONTACT")}</Box>
    </Slide>
  );
};

export default Contact;
