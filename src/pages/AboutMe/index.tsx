import {
  Check as CheckIcon,
  DownloadOutlined as DownloadOutlinedIcon,
  Person as PersonIcon,
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
  StepLabel,
  Stepper,
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

  const training: TraningDescriptionProps[] = [
    {
      label: t("TEXT.TRAINING_AND_SKILLS"),
      description: [
        {
          title: t("TEXT.ABOUT_ME_DESC_ONE"),
        },
        {
          title: t("TEXT.ABOUT_ME_DESC_TWO"),
        },
        {
          button: t("TEXT.CURRICULUM"),
        },
      ],
    },
    {
      label: t("TEXT.MAIN_TECHNOLOGIES"),
    },
  ];

  return (
    <Slide direction="down" in mountOnEnter unmountOnExit>
      <Grid display="flex" justifyContent="center" container pt={11}>
        <Grid item xs={12} sm={12} md={8} lg={9} pl={1} pr={1}>
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
            sx={{ p: 4, pl: mobile ? 3 : 4, mb: 3, borderRadius: 3 }}
            elevation={3}
          >
            <Stepper orientation="vertical">
              {training.map((t) => (
                <Step key={t.label} active={true}>
                  <StepLabel>{t.label}:</StepLabel>
                  <StepContent sx={{ pl: mobile ? "11px" : "20px" }}>
                    <List dense={true}>
                      {t.description &&
                        t.description.map((v) => (
                          <ListItem
                            key={v.title}
                            sx={{ mt: 0.5, p: 0, pb: mobile ? 2 : 0 }}
                          >
                            <ListItemAvatar
                              sx={{ mt: mobile ? 0 : 0.8, minWidth: "45px" }}
                            >
                              <CheckIcon color="primary" />
                            </ListItemAvatar>
                            {v.title}
                            {v.button && (
                              <Button
                                onClick={handlePrintPdf}
                                size="small"
                                variant="contained"
                                sx={{ mt: 1 }}
                                startIcon={<DownloadOutlinedIcon />}
                              >
                                {v.button}
                              </Button>
                            )}
                          </ListItem>
                        ))}
                    </List>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
            <Box>
              <Graph title={t("TEXT.YEARS_OF_EXPERIENCE")} />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Slide>
  );
};

export default AboutMe;
