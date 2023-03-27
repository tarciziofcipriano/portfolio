import {
  Box,
  Button,
  Slide,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import Graph from "./Graph/index";
import { handlePrintPdf } from "./parse";

const AboutMe = () => {
  const { t } = useTranslation();

  const training = [
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
      description: [
        { title: "ReactJS" },
        { title: "Typescript" },
        { title: "NodeJS" },
        { title: "MaterialUI" },
        { title: "Git" },
      ],
    },
  ];

  return (
    <Slide direction="down" in mountOnEnter unmountOnExit>
      <Box maxWidth={800} pl={2} pr={2} pt={8}>
        <Box display="flex" justifyContent="space-between" mb={3}>
          <Typography fontSize={36} fontWeight="bold">
            {t("TEXT.ABOUT_ME")}
          </Typography>
          <Box alignSelf="center">
            <Button onClick={handlePrintPdf} size="small" variant="contained">
              {t("TEXT.CURRICULUM")}
            </Button>
          </Box>
        </Box>
        <Stepper orientation="vertical">
          <Step
            key={training[0].label}
            active={true}
            sx={{
              "& .MuiStepLabel-root .Mui-active": {
                fontWeight: "bold",
                fontSize: 19,
              },
            }}
          >
            <StepLabel>{training[0].label}:</StepLabel>
            <StepContent>
              {training[0].description.map((v) => (
                <Box key={v.title}>
                  <Typography pb={1}>{v.title}</Typography>
                </Box>
              ))}
            </StepContent>
            <StepLabel>{training[1].label}:</StepLabel>
          </Step>
        </Stepper>
        <Graph title={t("TEXT.YEARS_OF_EXPERIENCE")} />
      </Box>
    </Slide>
  );
};

export default AboutMe;
