import { VideoLabel as VideoLabelIcon } from "@mui/icons-material";
import { Box, Grid, Slide, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import useIsMobile from "../../hooks/useIsMobile";
import Card from "./Card";

interface CardDataProps {
  title: string;
  description: string;
  link: string;
  image: string;
}

const Projects = () => {
  const { t } = useTranslation();
  const mobile = useIsMobile();

  const cardsData: CardDataProps[] = [
    {
      title: "Crud-user-with-axios-mui",
      description:
        "Crud (create, read, update e delete) de usuários utilizando a biblioteca Axios.",
      link: "https://github.com/tarciziofcipriano/Crud-user-with-axios-mui",
      image: "/user.jpg",
    },
    {
      title: "React-dashboard",
      description:
        "Dashboard, mostrando mostrando algumas formas de visualizar os dados no frontend.",
      link: "https://github.com/tarciziofcipriano/React-dashboard",
      image: "/user.jpg",
    },
    {
      title: "BlogApp-with-mongodb-node-bootstrap",
      description:
        "Blog, com o frontend desenvolvido com Bootstrap e backend com Javascript.",
      link: "https://github.com/tarciziofcipriano/BlogApp-mongodb-node-bootstrap",
      image: "/user.jpg",
    },
    {
      title: "Fullstack-React-TS-MongoDB",
      description:
        "Estrutura fullstack React, com o backend em Javascript e o frontend em ReactJS e Typescript.",
      link: "https://github.com/tarciziofcipriano/Fullstack-React-TS-MongoDB",
      image: "/user.jpg",
    },
    {
      title: "Shopping-cart",
      description:
        "Página básica de compras desenvolvido em ReactJS com Javascript.",
      link: "https://github.com/tarciziofcipriano/Shopping-cart",
      image: "/user.jpg",
    },
    {
      title: "Boleto-in-typescript",
      description:
        "Boleto feito em ReactJS com Typescript, com código de barras.",
      link: "https://github.com/tarciziofcipriano/Boleto-in-typescript",
      image: "/user.jpg",
    },
    {
      title: "Ticket-in-Typescript",
      description: "Ingressos feitos em Typescript (no tamanho 80mm e A4)",
      link: "https://github.com/tarciziofcipriano/Ticket-in-Typescript",
      image: "/user.jpg",
    },
    {
      title: "Example-swagger-api",
      description:
        "Framework que auxilia a descrição, consumo e visualização de serviços de uma API REST.",
      link: "https://github.com/tarciziofcipriano/Example-swagger-api",
      image: "/user.jpg",
    },
    {
      title: "Basic-crud-Angular",
      description:
        "Um simples projeto mostrando um Crud de produtos feito em Angular.",
      link: "https://github.com/tarciziofcipriano/Basic-crud-Angular",
      image: "/user.jpg",
    },
  ];

  return (
    <Slide direction="down" in mountOnEnter unmountOnExit>
      <Grid justifyContent="center" container pt={mobile ? "20%" : "8%"}>
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
