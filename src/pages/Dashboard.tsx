import {
  Box,
  Button,
  Grid,
  IconButton,
  Slide,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  Facebook as FacebookIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  Instagram as InstagramIcon,
} from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ABOUT_ME } from "../routes/constants";

const Dashboard = () => {
  const { t } = useTranslation();

  return (
    <Slide direction="down" in mountOnEnter unmountOnExit>
      <Grid
        justifyContent="center"
        textAlign="center"
        container
        pt="20%"
      >
        <Grid item xs={12} sm={12} md={8} lg={9} pl={1} pr={1} alignSelf="center">
          <Box>
            <Typography fontWeight="bold" fontSize="h3" mr={1}>
              {t("TEXT.DASHBOARD_TITLE")}
            </Typography>
            <Typography fontWeight={500} fontSize="h6" mt={1}>
              {t("TEXT.DASHBOARD_SUBTITLE")}
            </Typography>
          </Box>
          <Button
            variant="contained"
            sx={{ mt: 3, mb: 3 }}
            component={Link}
            to={ABOUT_ME}
          >
            {t("TEXT.ABOUT_ME")}
          </Button>
          <Grid container sx={{ placeContent: "center" }} mb={3}>
            <Grid item>
              <a
                href="https://pt-br.facebook.com/tarcizio.cipriano/"
                target="_blank"
                rel="noreferrer"
              >
                <Tooltip title="Facebook">
                  <IconButton>
                    <FacebookIcon />
                  </IconButton>
                </Tooltip>
              </a>
            </Grid>
            <Grid item>
              <a
                href="https://www.linkedin.com/in/tarcizio-fernandes-cipriano-88bb98146/"
                target="_blank"
                rel="noreferrer"
              >
                <Tooltip title="LinkedIn">
                  <IconButton>
                    <LinkedInIcon />
                  </IconButton>
                </Tooltip>
              </a>
            </Grid>
            <Grid item alignSelf="center">
              <a
                href="https://github.com/tarciziofcipriano"
                target="_blank"
                rel="noreferrer"
              >
                <Tooltip title="GitHub">
                  <IconButton>
                    <GitHubIcon />
                  </IconButton>
                </Tooltip>
              </a>
            </Grid>
            <Grid item>
              <a
                href="https://www.instagram.com/ciprianotarcizio/"
                target="_blank"
                rel="noreferrer"
              >
                <Tooltip title="Instagram">
                  <IconButton>
                    <InstagramIcon />
                  </IconButton>
                </Tooltip>
              </a>
            </Grid>
          </Grid>
        </Grid>
        <Grid item pl={1.5} pr={1.5}>
          <img
            src="/foto_perfil.jpeg"
            alt="user"
            style={{
              height: "340px",
              width: "275px",
             borderRadius: "50%",
            }}
          />
        </Grid>
      </Grid>
    </Slide>
  );
};

export default Dashboard;
