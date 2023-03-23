import {
  Box,
  Container,
  CssBaseline,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ThemeProvider,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import {
  ABOUT_ME,
  PORTFOLIO,
  CONTACT,
  HOME,
  PROJECTS,
} from "./routes/constants";
import Header from "./components/Header";
import { useTranslation } from "react-i18next";
import { theme } from "./theme";
import { loginBackground } from "./BackgroundImages";

interface LayoutProps {
  children: JSX.Element;
  window?: () => Window;
}

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const Layout = ({ children, window }: LayoutProps) => {
  const { t } = useTranslation();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [mode, setMode] = React.useState<"light" | "dark">("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const navItems = [
    { name: t("BUTTON.HOME_PAGE"), link: HOME },
    { name: t("TEXT.ABOUT_ME"), link: ABOUT_ME },
    { name: t("TEXT.PORTFOLIO"), link: PORTFOLIO },
    { name: t("TEXT.PROJECTS"), link: PROJECTS },
    { name: t("TEXT.CONTACT"), link: CONTACT },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List sx={{ pt: 2 }}>
        {navItems.map((item, i) => (
          <ListItem
            key={item.name}
            disablePadding
            sx={
              i !== 4
                ? {
                    borderBottom:
                      mode === "light"
                        ? "1px solid #6f81e6"
                        : "1px solid #18181c",
                    color: "white",
                    p: 1,
                  }
                : { p: 1, color: "white" }
            }
          >
            <ListItemButton
              sx={{ textAlign: "center" }}
              component={Link}
              to={item.link}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme(mode)}>
        <Box
          sx={{
            display: "flex",
            placeContent: "center",
          }}
        >
          <CssBaseline />
          <Header
            handleDrawerToggle={handleDrawerToggle}
            navItems={navItems}
            colorModeContext={ColorModeContext}
          />
          <Box component="nav">
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: 240,
                  backgroundColor: mode === "light" ? "#5E72E4" : "black",
                },
              }}
            >
              {drawer}
            </Drawer>
          </Box>
          <Container disableGutters maxWidth={"100%" as any}>
            <Grid
              container
              alignItems="center"
              justifyContent="center"
              sx={{
                height: "100vh",
                backgroundImage: mode === "light" ? loginBackground : "none",
                backgroundSize: "cover",
              }}
            >
              <Grid item>{children}</Grid>
            </Grid>
          </Container>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default Layout;
