import React from "react";

import {
  Card as MuiCard,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { ThemeModeContext } from "../../context/ThemeModeContext";

interface CardDataProps {
  title: string;
  description: string;
  link: string;
  image: string;
}

const Card = ({ title, description, link, image }: CardDataProps) => {
  const { theme } = React.useContext(ThemeModeContext);

  return (
    <MuiCard
      sx={{
        height: 300,
        width: 270,
        m: 2,
        mt: 0,
        mb: 4,
        "&:hover":
          theme === "light"
            ? {
                backgroundColor: "#F6F6F6",
                boxShadow:
                  "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
                cursor: "pointer",
              }
            : {
                backgroundColor: "#323232",
                boxShadow: "0px 1px 2px 0px rgba(175, 175, 175, 0.8), 1px 2px 4px 0px rgba(175, 175, 175, 0.8), 2px 4px 8px 0px rgba(175, 175, 175, 0.8), 2px 4px 16px 0px rgba(175, 175, 175, 0.8)",
                cursor: "pointer",
              },
      }}
    >
      <CardMedia component="img" height="140" image={image} />
      <CardContent>
        <Typography gutterBottom fontSize={20} component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </MuiCard>
  );
};

export default Card;
