import { AppBar, Box, IconButton, Tab, Tabs, Toolbar } from "@mui/material";
import { Home as HomeIcon, Menu as MenuIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { HOME } from "../routes/constants";
import LanguageSelector from "./LanguageSelector";
import React, { Context } from "react";
import ThemeSwitch from "./ThemeSwitch";

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
  const [menuOption, setMenuOption] = React.useState(0);

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
          }}
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ display: { sm: "none" } }}>
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
            sx={{
              textDecoration: "none",
            }}
          >
            <HomeIcon
              fontSize="large"
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 1,
                color: "white",
              }}
            />
          </Box>
        </Box>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Tabs
            value={menuOption}
            onChange={handleChange}
            sx={{
              "& .MuiTab-root.Mui-selected": {
                color: "#E0E0E0",
              },
              display: "inline-flex",
            }}
            indicatorColor="secondary"
          >
            {navItems.map((item) => (
              <Tab
                label={item.name}
                disableRipple
                sx={{
                  pt: 0,
                  pb: 0,
                  pr: 2,
                  pl: 0,
                  fontSize: 12.5,
                  fontWeight: "bold",
                  color: "white",
                }}
                component={Link}
                to={item.link}
              />
            ))}
          </Tabs>
          <LanguageSelector isMenu />
          <ThemeSwitch onClick={colorMode.toggleColorMode} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
