import {
  AppBar,
  Box,
  IconButton,
  Tab,
  Tabs,
  Toolbar,
  Tooltip,
} from "@mui/material";
import { Home as HomeIcon, Menu as MenuIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { HOME } from "../routes/constants";
import LanguageSelector from "./LanguageSelector";
import React, { Context } from "react";
import ThemeSwitch from "./ThemeSwitch";
import { ThemeModeContext } from "../context/ThemeModeContext";
import { MenuOptionContext } from "../context/MenuOptionContext";
import { useTranslation } from "react-i18next";

interface HeaderProps {
  handleDrawerToggle: () => void;
  navItems: {
    name: string;
    link: string;
  }[];
  colorModeContext: Context<{ toggleColorMode: () => void }>;
}

const Header = ({
  handleDrawerToggle,
  navItems,
  colorModeContext,
}: HeaderProps) => {
  const colorMode = React.useContext(colorModeContext);
  const { theme } = React.useContext(ThemeModeContext);
  const { t } = useTranslation();
  const { menuOption, setMenuOption } = React.useContext(MenuOptionContext);

  const handleChange = (_: any, value: number) => {
    setMenuOption(value);
  };

  return (
    <AppBar component="nav" sx={{ borderRadius: 0 }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{
            mr: 2,
            flexGrow: 1,
            display: { sm: "none" },
            placeContent: "start",
            maxWidth: 10,
          }}
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ display: { sm: "none" } }} ml="auto">
          <LanguageSelector isMenu />
        </Box>
        <Box sx={{ display: { sm: "none" } }}>
          <ThemeSwitch onClick={colorMode.toggleColorMode} />
        </Box>
        <Box
          sx={{
            mr: 2,
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
          }}
        >
          <Box
            component={Link}
            to={HOME}
            onClick={() => setMenuOption(0)}
            sx={{
              textDecoration: "none",
            }}
          >
            <HomeIcon
              fontSize="large"
              color={theme === "light" ? "primary" : "secondary"}
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 1,
              }}
            />
          </Box>
        </Box>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Tabs
            value={menuOption}
            onChange={handleChange}
            sx={{
              display: "inline-flex",
            }}
          >
            {navItems.map((item) => (
              <Tab
                key={item.name}
                label={item.name}
                disableRipple
                sx={{
                  p: 0,
                  mr: 1,
                  fontSize: 12,
                  fontWeight: "bold",
                }}
                component={Link}
                to={item.link}
              />
            ))}
          </Tabs>
          <LanguageSelector isMenu />
          <Tooltip title={t("TEXT.THEME")}>
            <ThemeSwitch onClick={colorMode.toggleColorMode} />
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
