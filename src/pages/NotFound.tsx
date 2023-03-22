import { Link } from "react-router-dom";

import { Home as HomeIcon } from "@mui/icons-material";
import { Button, Divider, Grid, Typography } from "@mui/material";
import { HOME } from "../routes/constants";

const NotFound = () => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      sx={{ pt: 5, textAlign: "center" }}
    >
      <Grid item>
        <Typography variant="h1" sx={{ fontSize: 180 }}>
          404
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          variant="h4"
          color="text.secondary"
          gutterBottom
          sx={{ textTransform: "uppercase" }}
        >
          Page not found
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h5" gutterBottom color="text.secondary">
          Page not found
        </Typography>
        <Divider light sx={{ m: 3 }} />
      </Grid>
      <Grid item>
        <Button
          size="large"
          variant="contained"
          startIcon={<HomeIcon />}
          component={Link}
          to={HOME}
        >
          Home
        </Button>
      </Grid>
    </Grid>
  );
};

export default NotFound;
