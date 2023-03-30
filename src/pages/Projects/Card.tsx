import {
  Card as MuiCard,
  CardActionArea,
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
    <MuiCard sx={{ height: 300, width: 270, m: 2, mt: 0, mb: 4 }}>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        style={{
          color: "inherit",
          textDecoration: "none",
          display: "block",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom fontSize={20} component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </a>
    </MuiCard>
  );
};

export default Card;
