import {
  Check as CheckIcon,
  Construction as ConstructionIcon,
  DownloadOutlined as DownloadOutlinedIcon,
  Person as PersonIcon,
  School as SchoolIcon,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  Paper,
  Slide,
  Step,
  StepContent,
  Stepper,
  Tooltip,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import useIsMobile from "../../hooks/useIsMobile";
import Graph from "./Graph/index";
import { handlePrintPdf } from "./parse";

type DescriptionProps = {
  title?: string | null;
  button?: string | null;
};

interface TraningDescriptionProps {
  label: string;
  description?: DescriptionProps[];
}

const AboutMe = () => {
  const { t } = useTranslation();
  const mobile = useIsMobile();

  const training: TraningDescriptionProps = {
    label: t("TEXT.TRAINING_AND_SKILLS"),
    description: [
      {
        title: `${t("TEXT.GRADUATION")};`,
      },
      {
        title: `${t("TEXT.POSTGRADUATE")};`,
      },
      {
        title: `${t("TEXT.FRONT_END")};`,
      },
      {
        title: `${t("TEXT.BACK_END")};`,
      },
      {
        button: t("TEXT.CURRICULUM"),
      },
    ],
  };

  return (
    <Slide direction="down" in mountOnEnter unmountOnExit>
      <Grid justifyContent="center" container pt={11}>
        <Grid item xs={12} sm={12} md={8} lg={5} pl={1} pr={1}>
          <Box display="flex" justifyContent="space-between" mb={3}>
            <Box display="flex">
              <Box mt={0.45} alignSelf="center">
                <PersonIcon fontSize="large" />
              </Box>
              <Typography
                fontSize={36}
                fontWeight="bold"
                ml={1}
                mt={mobile ? 0.6 : 0}
              >
                {t("TEXT.ABOUT_ME")}
              </Typography>
            </Box>
          </Box>
          <Paper
            sx={{ p: 4, pb: 5.4, pl: mobile ? 3 : 4, mb: 3, borderRadius: 3 }}
            elevation={3}
          >
            <Stepper orientation="vertical">
              <Step key={training.label} active={true}>
                <Box display="flex" alignItems="center">
                  <SchoolIcon fontSize="medium" />
                  <Typography
                    fontSize={mobile ? 14 : 18}
                    fontWeight={500}
                    ml={1.5}
                  >
                    {`${training.label}:`}
                  </Typography>
                </Box>
                <StepContent sx={{ p: 0, m: 0 }}>
                  <List dense={true}>
                    {training.description &&
                      training.description.map((v) => (
                        <ListItem key={v.title} sx={{ mt: 1.2, mb: 1.2 }}>
                          <ListItemAvatar
                            sx={{ mt: mobile ? 0 : 0.8, minWidth: "45px" }}
                          >
                            <CheckIcon color="primary" />
                          </ListItemAvatar>
                          {v.title}
                          {v.button && (
                            <Tooltip
                              title={`${t("TEXT.DOWNLOAD")} ${v.button}`}
                            >
                              <Button
                                onClick={handlePrintPdf}
                                size="small"
                                variant="contained"
                                sx={{ mt: 1 }}
                                startIcon={<DownloadOutlinedIcon />}
                              >
                                {v.button}
                              </Button>
                            </Tooltip>
                          )}
                        </ListItem>
                      ))}
                  </List>
                </StepContent>
              </Step>
            </Stepper>
          </Paper>
        </Grid>
        <Grid item>
          <Paper
            sx={{
              p: 3,
              mt: mobile ? 0 : 9.8,
              ml: mobile ? 0 : 1,
              mb: 3,
              borderRadius: 3,
            }}
            elevation={3}
          >
            <Box
              display="flex"
              alignItems="center"
              minWidth={mobile ? 270 : 500}
              pb={1}
            >
              <ConstructionIcon fontSize="medium" />
              <Typography fontSize={mobile ? 14 : 18} fontWeight={500} ml={1.5}>
                {`${t("TEXT.MAIN_TECHNOLOGIES")}:`}
              </Typography>
            </Box>
            <Graph title={t("TEXT.YEARS_OF_EXPERIENCE")} />
          </Paper>
        </Grid>
      </Grid>
    </Slide>
  );
};

export default AboutMe;
