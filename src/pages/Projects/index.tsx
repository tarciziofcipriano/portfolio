import { VideoLabel as VideoLabelIcon } from "@mui/icons-material";
import { Box, Grid, Slide, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import Card from "./Card";

interface CardDataProps {
  title: string;
  description: string;
  link: string;
  image: string;
}

const Projects = () => {
  const { t } = useTranslation();

  const cardsData: CardDataProps[] = [
    {
      title: "React-dashboard",
      description: t("CARD_DATA.REACT_DASHBOARD"),
      link: "https://github.com/tarciziofcipriano/React-dashboard",
      image: "/projects/react-dashboard.png",
    },
    {
      title: "Fullstack-React-TS-MongoDB",
      description: t("CARD_DATA.FULLSTACK_REACT"),
      link: "https://github.com/tarciziofcipriano/Fullstack-React-TS-MongoDB",
      image: "/projects/fullstack-react-ts-mongodb.png",
    },
    {
      title: "BlogApp-with-mongodb-node",
      description: t("CARD_DATA.BLOG_APP"),
      link: "https://github.com/tarciziofcipriano/BlogApp-mongodb-node-bootstrap",
      image: "/projects/brogapp-mongodb-node-bootstrap.png",
    },
    {
      title: "Shopping-cart",
      description: t("CARD_DATA.SHOPPING_CARD"),
      link: "https://github.com/tarciziofcipriano/Shopping-cart",
      image: "/projects/shopping-cart.png",
    },
    {
      title: "Boleto-in-typescript",
      description: t("CARD_DATA.BILLET_IN_TYPESCRIPT"),
      link: "https://github.com/tarciziofcipriano/Boleto-in-typescript",
      image: "/projects/boleto-in-typescript.png",
    },
    {
      title: "Ticket-in-Typescript",
      description: t("CARD_DATA.TICKETS_IN_TYPESCRIPT"),
      link: "https://github.com/tarciziofcipriano/Ticket-in-Typescript",
      image: "/projects/ticket-in-typescript.png",
    },
    {
      title: "React-Redux-example",
      description: t("CARD_DATA.REACT_REDUX"),
      link: "https://github.com/tarciziofcipriano/React-Redux-example",
      image: "/projects/react-Redux-example.png",
    },
    {
      title: "Next-Basic-Structure",
      description: t("CARD_DATA.NEXTJS"),
      link: "https://github.com/tarciziofcipriano/Next-Basic-Structure",
      image: "/projects/next-basic-structure.png",
    },
    {
      title: "Example-swagger-api",
      description: t("CARD_DATA.SWAGGER"),
      link: "https://github.com/tarciziofcipriano/Example-swagger-api",
      image: "/projects/swagger.png",
    },
    {
      title: "Crud-user-with-axios-mui",
      description: t("CARD_DATA.CRUD_AXIOS"),
      link: "https://github.com/tarciziofcipriano/Crud-user-with-axios-mui",
      image: "/projects/crud-user-with-axios-mui.png",
    },
    {
      title: "Basic-crud-Angular",
      description: t("CARD_DATA.CRUD_ANGULAR"),
      link: "https://github.com/tarciziofcipriano/Basic-crud-Angular",
      image: "/projects/crud-angular.png",
    },
  ];

  return (
    <Slide direction="down" in mountOnEnter unmountOnExit>
      <Grid justifyContent="center" container pt={11}>
        <Grid item xs={12} sm={12} md={8} lg={9} pl={1} pr={1}>
          <Box display="flex" mb={4}>
            <Box mt={0.45} alignSelf="center">
              <VideoLabelIcon fontSize="large" />
            </Box>
            <Typography fontSize={36} fontWeight="bold" ml={1}>
              {t("TEXT.PROJECTS")}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignContent: "flex-start",
              placeContent: "center",
            }}
          >
            {cardsData.map((v) => (
              <Box key={v.title}>
                <Card
                  title={v.title}
                  description={v.description}
                  link={v.link}
                  image={v.image}
                />
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Slide>
  );
};

export default Projects;
