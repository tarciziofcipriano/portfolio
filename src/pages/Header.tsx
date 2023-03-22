import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { HOME } from "../routes/constants";

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
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            display: { xs: "none", sm: "block" },
            textDecoration: "inherit",
          }}
          component={Link}
          to={HOME}
        >
          HOME
        </Typography>
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
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
