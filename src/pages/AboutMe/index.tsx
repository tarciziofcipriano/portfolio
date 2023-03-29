import { Person as PersonIcon } from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
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
  title: string;
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
      label: t("TEXT.TRAINING"),
      description: [
        {
          title: t("TEXT.ABOUT_ME_DESC_ONE"),
        },
        {
          title: t("TEXT.ABOUT_ME_DESC_TWO"),
        },
      ],
    },
    {
      label: t("TEXT.MAIN_TECHNOLOGIES"),
    },
  ];

  return (
    <Slide direction="down" in mountOnEnter unmountOnExit>
      <Grid
        display="flex"
        justifyContent="center"
        container
        pt={mobile ? "20%" : "10%"}
      >
        <Grid item xs={12} sm={12} md={8} lg={9} pl={1} pr={1}>
          <Box display="flex" justifyContent="space-between" mb={3}>
            <Box display="flex">
              <Box mt={0.45} alignSelf="center">
                <PersonIcon fontSize="large" />
              </Box>
              <Typography fontSize={mobile ? 32 : 36} fontWeight="bold" ml={1}>
                {t("TEXT.ABOUT_ME")}
              </Typography>
            </Box>
            <Box alignSelf="center">
              <Button onClick={handlePrintPdf} size="small" variant="contained">
                {t("TEXT.CURRICULUM")}
              </Button>
            </Box>
          </Box>
          <Stepper orientation="vertical">
            {training.map((t) => (
              <Step key={t.label} active={true}>
                <StepLabel>{t.label}</StepLabel>
                <StepContent>
                  {t.description &&
                    t.description.map((v) => (
                      <Typography>{v.title}</Typography>
                    ))}
                </StepContent>
              </Step>
            ))}
          </Stepper>
          <Box>
            <Graph title={t("TEXT.YEARS_OF_EXPERIENCE")} />
          </Box>
        </Grid>
      </Grid>
    </Slide>
  );
};

export default AboutMe;
