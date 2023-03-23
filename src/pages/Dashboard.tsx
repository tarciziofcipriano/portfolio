import { Box, Slide } from "@mui/material";
import { useTranslation } from "react-i18next";

const Dashboard = () => {
  const { t } = useTranslation();

  return (
    <Slide direction="down" in mountOnEnter unmountOnExit>
      <Box>{t("BUTTON.HOME_PAGE")}</Box>
    </Slide>
  );
};

export default Dashboard;
