import {
  Check as CheckIcon,
  Info as InfoIcon,
  LooksOneOutlined as LooksOneOutlinedIcon,
  LooksTwoOutlined as LooksTwoOutlinedIcon,
  Looks3Outlined as Looks3OutlinedIcon,
  Looks4Outlined as Looks4OutlinedIcon,
  Looks5Outlined as Looks5OutlinedIcon,
  Looks6Outlined as Looks6OutlinedIcon,
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
  Paper,
  Slide,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import useIsMobile from "../hooks/useIsMobile";
import { portfolioVersion } from "../version";

type DescriptionProps = {
  title: string;
  link: string;
  icon: JSX.Element;
  description: string;
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
        description: t("ABOUT_THE_PORTFOLIO.REACTJS"),
      },
      {
        title: "React Router",
        link: "https://reactrouter.com/en/main",
        icon: <CheckIcon />,
        description: t("ABOUT_THE_PORTFOLIO.REACT_ROUTER"),
      },
      {
        title: "React Context",
        link: "https://react.dev/reference/react#context-hooks",
        icon: <CheckIcon />,
        description: t("ABOUT_THE_PORTFOLIO.REACT_CONTEXT"),
      },
      {
        title: "React i18next",
        link: "https://react.i18next.com/",
        icon: <CheckIcon />,
        description: t("ABOUT_THE_PORTFOLIO.I18NEXT"),
      },
      {
        title: "React Hooks",
        link: "https://react.dev/learn#using-hooks",
        icon: <CheckIcon />,
        description: t("ABOUT_THE_PORTFOLIO.REACT_HOOKS"),
      },
      {
        title: "Material-UI",
        link: "https://mui.com/",
        icon: <CheckIcon />,
        description: t("ABOUT_THE_PORTFOLIO.MUI"),
      },
      {
        title: "Typescript",
        link: "https://www.typescriptlang.org/",
        icon: <CheckIcon />,
        description: t("ABOUT_THE_PORTFOLIO.TYPESCRIPT"),
      },
      {
        title: "EmailJS",
        link: "https://www.emailjs.com/",
        icon: <CheckIcon />,
        description: t("ABOUT_THE_PORTFOLIO.EMAILJS"),
      },
      {
        title: "Netlify",
        link: "https://www.netlify.com/",
        icon: <CheckIcon />,
        description: t("ABOUT_THE_PORTFOLIO.NETLIFY"),
      },
    ],
  };

  return (
    <Slide direction="down" in mountOnEnter unmountOnExit>
      <Grid justifyContent="center" container pt={11}>
        <Grid item xs={12} sm={12} md={8} lg={5} pl={1} pr={1}>
          <Box display="flex" mb={3}>
            <Box mt={0.45} alignSelf="center">
              <TableViewIcon fontSize="large" />
            </Box>
            <Typography fontSize={mobile ? 34 : 36} fontWeight="bold" ml={1}>
              {t("TEXT.ABOUT_THE_PORTFOLIO")}
            </Typography>
          </Box>
          <Paper sx={{ p: 4, mb: 3, borderRadius: 3 }} elevation={3}>
            <Box>
              <Typography
                sx={{ mb: 2 }}
                fontSize={mobile ? 17 : 20}
                fontWeight={500}
                component="div"
              >
                {descriptions.label}:
              </Typography>
              <List dense={true}>
                {descriptions.description.map((v) => (
                  <ListItem key={v.title}>
                    <ListItemAvatar>
                      <Avatar>{v.icon}</Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={
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
                      }
                      secondary={v.description}
                    ></ListItemText>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Paper>
        </Grid>
        <Grid item pl={1} pr={0.5}>
          <Paper
            sx={{ p: 4, mb: 3, mt: mobile ? 3 : 9.8, borderRadius: 3 }}
            elevation={3}
          >
            <Box display="flex" alignItems="center">
              <InfoIcon />
              <Typography variant="h6" ml={1.5} mr={3}>
                {t("TEXT.COMMENTS")}:
              </Typography>
            </Box>
            <List dense={true}>
              <ListItem sx={{ mt: 1 }}>
                <ListItemAvatar sx={{ mt: mobile ? 0 : 0.8 }}>
                  <LooksOneOutlinedIcon color="primary" />
                </ListItemAvatar>
                <ListItemText primary={`${t("TOAST.NETLIFY")}.`} />
              </ListItem>
              <ListItem sx={{ mt: 2 }}>
                <ListItemAvatar sx={{ mt: mobile ? 0 : 0.8 }}>
                  <LooksTwoOutlinedIcon color="primary" />
                </ListItemAvatar>
                <ListItemText
                  primary={t("TOAST.PORTFOLIO_REPOSITORY")}
                  secondary={
                    <a
                      href="https://github.com/tarciziofcipriano/portfolio"
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        color: "inherit",
                        fontSize: "14px",
                      }}
                    >
                      Portfolio Github
                    </a>
                  }
                />
              </ListItem>
              <ListItem sx={{ mt: 2 }}>
                <ListItemAvatar sx={{ mt: mobile ? 0 : 0.8 }}>
                  <Looks3OutlinedIcon color="primary" />
                </ListItemAvatar>
                <ListItemText primary={`${t("TEXT.PORTFOLIO_RESPONSIVE")}.`} />
              </ListItem>
              <ListItem sx={{ mt: 2 }}>
                <ListItemAvatar sx={{ mt: mobile ? 0 : 0.8 }}>
                  <Looks4OutlinedIcon color="primary" />
                </ListItemAvatar>
                <ListItemText primary={`${t("TEXT.ALL_PAGES_THEME")}.`} />
              </ListItem>
              <ListItem sx={{ mt: 2 }}>
                <ListItemAvatar sx={{ mt: mobile ? 0 : 0.8 }}>
                  <Looks5OutlinedIcon color="primary" />
                </ListItemAvatar>
                <ListItemText primary={`${t("TEXT.ALL_PAGES_LANG")}.`} />
              </ListItem>
              <ListItem sx={{ mt: 2 }}>
                <ListItemAvatar sx={{ mt: mobile ? 0 : 0.8 }}>
                  <Looks6OutlinedIcon color="primary" />
                </ListItemAvatar>
                <ListItemText
                  primary={`${t("TEXT.LAST_UPDATE")}:`}
                  secondary={portfolioVersion}
                />
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Slide>
  );
};

export default AboutThePortfolio;