import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import { useTranslation } from "react-i18next";

import { ContactMail as ContactMailIcon } from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  Grid,
  Paper,
  Slide,
  TextField,
  Typography,
} from "@mui/material";
import { ToastContext } from "../context/ToastContext";
import useIsMobile from "../hooks/useIsMobile";

const { REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, REACT_APP_PUBLIC_KEY } =
  process.env;

const Contact = () => {
  const { t } = useTranslation();
  const mobile = useIsMobile();
  const { toastSuccess, toastError } = React.useContext(ToastContext);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const form: any = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        REACT_APP_SERVICE_ID as string,
        REACT_APP_TEMPLATE_ID as string,
        form.current,
        REACT_APP_PUBLIC_KEY
      )
      .then(
        () => {
          toastSuccess("E-mail enviado com sucesso!");
        },
        () => {
          toastError("Erro ao enviar Email");
        }
      );
  };

  const handleChangeName = (event: string) => {
    setName(event);
  };
  const handleChangeEmail = (event: string) => {
    setEmail(event);
  };
  const handleChangeMessage = (event: string) => {
    setMessage(event);
  };

  const isFormValid = name !== "" && email !== "" && message !== "";

  return (
    <Slide direction="down" in mountOnEnter unmountOnExit>
      <Grid justifyContent="center" container pt={mobile ? "20%" : 11}>
        <Grid item xs={12} sm={12} md={8} lg={6} pl={1} pr={1}>
          <Box display="flex" mb={3}>
            <Box mt={0.45} alignSelf="center">
              <ContactMailIcon fontSize="large" />
            </Box>
            <Typography fontSize={36} fontWeight="bold" ml={1}>
              {t("TEXT.CONTACT")}
            </Typography>
          </Box>
          <Paper sx={{ p: 4, borderRadius: 3 }} elevation={3}>
            <form ref={form} onSubmit={sendEmail}>
              <Box display="grid">
                <TextField
                  label={t("TEXT.NAME")}
                  name="name"
                  onChange={(e) => handleChangeName(e.target.value)}
                />
                <TextField
                  label="Email"
                  name="email"
                  onChange={(e) => handleChangeEmail(e.target.value)}
                  sx={{ mt: 2, mb: 2 }}
                />
                <TextField
                  label={t("TEXT.MESSAGE")}
                  name="message"
                  multiline
                  rows={6}
                  onChange={(e) => handleChangeMessage(e.target.value)}
                  sx={{ mb: 2 }}
                />
              </Box>
              <Button
                disabled={!isFormValid}
                variant="contained"
                type="submit"
                sx={{ width: 120 }}
              >
                {t("BUTTON.SEND")}
              </Button>
            </form>
          </Paper>
          <Alert
            variant="outlined"
            severity="info"
            sx={{ fontSize: 14, fontWeight: 500, ml: 1, mt: 3, maxWidth: 550 }}
          >
            {t("TOAST.FILL_ALL_FIELDS")}
          </Alert>
        </Grid>
      </Grid>
    </Slide>
  );
};

export default Contact;
