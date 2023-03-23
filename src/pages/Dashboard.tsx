import { Box, Button, Grid, Slide, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ABOUT_ME } from "../routes/constants";

const Dashboard = () => {
  const { t } = useTranslation();

  return (
    <Slide direction="down" in mountOnEnter unmountOnExit>
      <Grid
        display="flex"
        justifyContent="center"
        textAlign="center"
        sx={{ color: "white" }}
        container
      >
        <Grid item xs={12} sm={12} md={8} lg={9}>
          <Box pt={5}>
            <Typography fontWeight="bold" fontSize="h3" ml={1} mr={1}>
              {t("TEXT.DASHBOARD_TITLE")}
            </Typography>
            <Typography fontWeight={500} fontSize="h6" m={2}>
              {t("TEXT.DASHBOARD_SUBTITLE")}
            </Typography>
          </Box>
          <Button
            variant="contained"
            sx={{ mt: 2, mb: 4 }}
            component={Link}
            to={ABOUT_ME}
          >
            {t("TEXT.ABOUT_ME")}
          </Button>
        </Grid>
        <Grid item pl={1.5} pr={1.5}>
          <img
            src="/user.jpg"
            alt="user"
            style={{
              height: "220px",
              width: "220px",
              borderRadius: "50%",
            }}
          />
        </Grid>
      </Grid>
    </Slide>
  );
};

export default Dashboard;
