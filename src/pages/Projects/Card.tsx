import {
  Card as MuiCard,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

interface CardDataProps {
  title: string;
  description: string;
  link: string;
  image: string;
}

const Card = ({ title, description, link, image }: CardDataProps) => {
  return (
    <MuiCard
      sx={{
        height: 300,
        width: 270,
        m: 2,
        mt: 0,
        mb: 4,
        "&:hover": {
          backgroundColor: "#F6F6F6",
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
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
