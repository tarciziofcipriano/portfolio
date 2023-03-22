import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();

  return <Box>{t("TEXT.PROJECTS")}</Box>;
};

export default Projects;
