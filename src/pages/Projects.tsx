import { Box, Slide } from "@mui/material";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <Slide direction="down" in mountOnEnter unmountOnExit>
      <Box>{t("TEXT.PROJECTS")}</Box>
    </Slide>
  );
};

export default Projects;
