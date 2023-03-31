import {
  Check as CheckIcon,
  Info as InfoIcon,
  Filter1 as Filter1Icon,
  Filter2 as Filter2Icon,
  TableView as TableViewIcon,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Slide,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import useIsMobile from "../hooks/useIsMobile";

type DescriptionProps = {
  title: string;
  link: string;
  icon: JSX.Element;
};

interface TraningDescriptionProps {
  label: string;
  description: DescriptionProps[];
}

const AboutThePortfolio = () => {
  const { t } = useTranslation();
  const mobile = useIsMobile();

  const descriptions: TraningDescriptionProps = {
    label: t("TEXT.SOME_TECHNOLOGIES_TITLE"),
    description: [
      {
        title: "ReactJS",
        link: "https://reactjs.org/",
        icon: <CheckIcon />,
      },
      {
        title: "React Router",
        link: "https://reactrouter.com/en/main",
        icon: <CheckIcon />,
      },
      {
        title: "React Context",
        link: "https://react.dev/reference/react#context-hooks",
        icon: <CheckIcon />,
      },
      {
        title: "React i18next",
        link: "https://react.i18next.com/",
        icon: <CheckIcon />,
      },
      {
        title: "Material-UI",
        link: "https://mui.com/",
        icon: <CheckIcon />,
      },
      {
        title: "Typescript",
        link: "https://www.typescriptlang.org/",
        icon: <CheckIcon />,
      },
      {
        title: "EmailJS",
        link: "https://www.emailjs.com/",
        icon: <CheckIcon />,
      },
      {
        title: "Heroku",
        link: "https://www.heroku.com/",
        icon: <CheckIcon />,
      },
    ],
  };

  return (
    <Slide direction="down" in mountOnEnter unmountOnExit>
      <Grid justifyContent="center" container pt={mobile ? "20%" : 11}>
        <Grid item xs={12} sm={12} md={8} lg={5} pl={1} pr={1}>
          <Box display="flex" mb={3}>
            <Box mt={0.45} alignSelf="center">
              <TableViewIcon fontSize="large" />
            </Box>
            <Typography fontSize={36} fontWeight="bold" ml={1}>
              {t("TEXT.ABOUT_THE_PORTFOLIO")}
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
              {descriptions.label}:
            </Typography>
            <List dense={true}>
              {descriptions.description.map((v) => (
                <ListItem key={v.title}>
                  <ListItemAvatar>
                    <Avatar>{v.icon}</Avatar>
                  </ListItemAvatar>
                  <a
                    href={v.link}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      color: "inherit",
                      textDecoration: "none",
                      display: "block",
                      width: "120px",
                    }}
                  >
                    <Typography
                      fontWeight={500}
                      sx={{
                        "&:hover": {
                          textDecoration: "underline",
                        },
                      }}
                    >
                      {v.title}
                    </Typography>
                  </a>
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>
        <Grid item pl={1.5}>
          <Box display="flex" alignItems="center" mt={mobile ? 4 : 11} mb={2}>
            <InfoIcon />
            <Typography variant="h6" ml={1.5} mr={3}>
              {t("TEXT.COMMENTS")}:
            </Typography>
          </Box>
          <List dense={true}>
            <ListItem sx={{ mt: 1 }}>
              <ListItemAvatar sx={{ mt: mobile ? 0 : 0.8 }}>
                <Filter1Icon color="primary" />
              </ListItemAvatar>
              <ListItemText primary={`${t("TOAST.HEROKU")}.`} />
            </ListItem>
            <ListItem sx={{ mt: 2 }}>
              <ListItemAvatar sx={{ mt: mobile ? 0 : 0.8 }}>
                <Filter2Icon color="primary" />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <p>
                    {t("TOAST.PORTFOLIO_REPOSITORY")}{" "}
                    <a
                      href="https://github.com/tarciziofcipriano/portfolio"
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        color: "inherit",
                        textDecoration: "none",
                        fontWeight: "bold",
                        fontSize: "14px",
                      }}
                    >
                      link
                    </a>
                    .
                  </p>
                }
              />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Slide>
  );
};

export default AboutThePortfolio;
