import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";

const Dashboard = () => {
  const { t } = useTranslation();

  return <Box>{t("BUTTON.HOME_PAGE")}</Box>;
};

export default Dashboard;
