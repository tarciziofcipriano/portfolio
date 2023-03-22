import { AppBar, Box, Button, IconButton, Toolbar } from "@mui/material";
import { Home as HomeIcon, Menu as MenuIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { HOME } from "../routes/constants";
import LanguageSelector from "./LanguageSelector";

interface HeaderProps {
  handleDrawerToggle: () => void;
  navItems: {
    name: string;
    link: string;
  }[];
}

const Header = ({ handleDrawerToggle, navItems }: HeaderProps) => {
  return (
    <AppBar component="nav">
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
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            />
          </Box>
        </Box>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {navItems.map((item) => (
            <Button
              key={item.name}
              sx={{ color: "#fff" }}
              component={Link}
              to={item.link}
            >
              {item.name}
            </Button>
          ))}
          <LanguageSelector isMenu />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
