import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import { useTranslation } from "react-i18next";

import {
  ChatBubbleOutline as ChatBubbleOutlineIcon,
  ContactMail as ContactMailIcon,
  MailOutline as MailOutlineIcon,
  PersonOutline as PersonOutlineIcon,
  Send as SendIcon,
} from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  Grid,
  Paper,
  Slide,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { ToastContext } from "../context/ToastContext";
import useIsMobile from "../hooks/useIsMobile";

const CustomTextField = styled(TextField)`
  fieldset {
    border-radius: 20px;
    border: 1px solid #b2b9c2;
  }
`;

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
        "service_ppagbw8",
        "template_p181hr4",
        form.current,
        "tTy6h_fKkRURr-WrT"
      )
      .then(
        () => {
          toastSuccess(t("TOAST.EMAIL_SUCCESS"));
        },
        () => {
          toastError(t("TOAST.EMAIL_ERROR"));
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
      <Grid justifyContent="center" container pt={11}>
        <Grid item xs={12} sm={12} md={8} lg={6} pl={1} pr={1}>
          <Box display="flex" mb={3}>
            <Box mt={0.45} alignSelf="center">
              <ContactMailIcon fontSize="large" />
            </Box>
            <Typography fontSize={36} fontWeight="bold" ml={1}>
              {t("TEXT.CONTACT")}
            </Typography>
          </Box>
          <Paper
            sx={{ p: 4, pr: mobile ? 3 : 4, pl: 2, borderRadius: 3 }}
            elevation={3}
          >
            <form ref={form} onSubmit={sendEmail}>
              <Box display="grid">
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <PersonOutlineIcon
                    sx={{
                      mr: 1,
                      color: "action.active",
                      alignSelf: "center",
                    }}
                    fontSize="medium"
                  />
                  <CustomTextField
                    label={t("TEXT.NAME")}
                    name="name"
                    color="primary"
                    onChange={(e) => handleChangeName(e.target.value)}
                    sx={{ width: "100%" }}
                  />
                </Box>
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <MailOutlineIcon
                    sx={{
                      mr: 1,
                      color: "action.active",
                      alignSelf: "center",
                    }}
                    fontSize="medium"
                  />
                  <CustomTextField
                    label="Email"
                    name="email"
                    color="primary"
                    onChange={(e) => handleChangeEmail(e.target.value)}
                    sx={{ mt: 2, mb: 2, width: "100%" }}
                  />
                </Box>
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <ChatBubbleOutlineIcon
                    sx={{
                      mt: 0,
                      mr: 1,
                      mb: 2,
                      color: "action.active",
                      alignSelf: "center",
                    }}
                    fontSize="medium"
                  />
                  <CustomTextField
                    label={t("TEXT.MESSAGE")}
                    name="message"
                    multiline
                    rows={6}
                    color="primary"
                    onChange={(e) => handleChangeMessage(e.target.value)}
                    sx={{ mb: 2, width: "100%" }}
                  />
                </Box>
              </Box>
              <Button
                disabled={!isFormValid}
                variant="contained"
                endIcon={<SendIcon />}
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
            sx={{
              fontSize: 14,
              fontWeight: 500,
              ml: 1,
              mt: 3,
              mb: 3,
              maxWidth: 550,
            }}
          >
            {t("TOAST.FILL_ALL_FIELDS")}
          </Alert>
        </Grid>
      </Grid>
    </Slide>
  );
};

export default Contact;
