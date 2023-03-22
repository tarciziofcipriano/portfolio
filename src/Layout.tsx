import {
  Box,
  Container,
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import {
  ABOUT_ME,
  ABOUT_THE_PORTIFOLIO,
  CONTACT,
  HOME,
  PROJECTS,
} from "./routes/constants";
import Header from "./pages/Header";

interface LayoutProps {
  children: JSX.Element;
  window?: () => Window;
}

const drawerWidth = 240;

const navItems = [
  { name: "Home", link: HOME },
  { name: "About me", link: ABOUT_ME },
  { name: "About the portfolio", link: ABOUT_THE_PORTIFOLIO },
  { name: "Projects", link: PROJECTS },
  { name: "Contact", link: CONTACT },
];

const Layout = ({ children, window }: LayoutProps) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        variant="h6"
        sx={{ my: 2, textDecoration: "inherit" }}
        component={Link}
        to={HOME}
      >
        HOME
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
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
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header handleDrawerToggle={handleDrawerToggle} navItems={navItems} />
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
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Container maxWidth="xl" sx={{ pt: 10 }}>
          {children}
        </Container>
      </Box>
    </Box>
  );
};

export default Layout;
