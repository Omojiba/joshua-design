import React, { useState } from "react";
import contact from "./contact.module.css";
import { StyledContainer } from "../../styled/containers/StyledContainer";
import {
  Grid,
  FormControl,
  Button,
  Typography,
  Stack,
  Box,
  FormHelperText,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import emailIcon from "../../assets/icons/email.png";
import tel from "../../assets/icons/phone.png";
import emailjs from "@emailjs/browser";

import { toast, ToastContainer } from "react-toastify";
import LoadingSpinner from "../../helpers/LoadingSpinner";

const validationSchema = yup.object({
  fullName: yup.string().required("Required"),
  phone: yup.string().required("Required"),
  email: yup.string().email("Enter a valid email").required("Required"),
  message: yup.string().required("Required"),
});

function Contact() {
  const [sending, setSending] = useState(false);
  const formik = useFormik({
    initialValues: {
      fullName: "",
      phone: "",
      email: "",
      message: "",
    },
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const emailDetails = {
        fullName: formik.values.fullName,
        email: formik.values.email,
        phone: formik.values.phone,
        message: formik.values.message,
      };
      setSending(true);
      try {
        emailjs
          .send(
            "service_bhtwfji",
            "template_v3twzmh",
            emailDetails,
            "ErX7UlNN-UlMx8FrD"
          )
          .then(
            function (response) {
              console.log("SUCCESS!", response.status, response.text);
              formik.resetForm();
              toast.success("Your message was sent successfully", {
                position: "top-right",
                autoClose: 2000,
              });
              setSending(false);
            },
            function (error) {
              console.log("FAILED...", error);
              toast.error("Something went wrong, try again", {
                position: "top-right",
                autoClose: 2000,
              });
              setSending(false);
            }
          );
      } catch (error) {
        console.log("error", error);
      }
    },
  });

  return (
    <main className={contact.main}>
      <ToastContainer />
      <StyledContainer>
        <Grid container spacing={4} className={contact.gridBox}>
          <Grid
            item
            xs={12}
            md={6}
            className={contact.info}
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
          >
            <Typography variant="h1">Contact Me</Typography>

            <div className={contact.infoText}>
              <Typography variant="textBody">
                I am always open to full-time & freelance opportunities. Please
                send me a message if you have any inquiries and I will respond
                to you as soon as possible.
              </Typography>
            </div>

            <Stack
              direction="row"
              gap={2}
              alignItems="center"
              justifyContent="start"
              marginBottom={3}
            >
              <img src={emailIcon} alt="email" />
              <Typography variant="textBody">
                joshuaikenna9@gmail.com
              </Typography>
            </Stack>

            <Stack
              direction="row"
              gap={2}
              alignItems="center"
              justifyContent="start"
            >
              <img src={tel} alt="phone" />
              <Typography variant="textBody">+234 901 403 3389</Typography>
            </Stack>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            data-aos="fade-left"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
          >
            <Box
              component="form"
              className={contact.form}
              onSubmit={formik.handleSubmit}
              sx={{ paddingTop: "2.5rem" }}
            >
              {/* FIRST INPUT */}

              <div className={contact.inputDiv}>
                <FormControl fullWidth>
                  <input
                    name="fullName"
                    id="fullName"
                    placeholder="Your Full Name"
                    type="text"
                    value={formik.values.fullName}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.fullName && Boolean(formik.errors.fullName)
                    }
                  />
                  <FormHelperText sx={{ color: "red" }} variant="error">
                    {formik.touched.fullName && formik.errors.fullName}
                  </FormHelperText>
                </FormControl>
              </div>

              {/* SECOND INPUT */}

              <div className={contact.inputDiv}>
                <FormControl fullWidth>
                  <input
                    name="phone"
                    id="phone"
                    placeholder="Your Phone Number"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                  />
                  <FormHelperText sx={{ color: "red" }} variant="error">
                    {formik.touched.phone && formik.errors.phone}
                  </FormHelperText>
                </FormControl>
              </div>

              {/* THIRD */}
              <div className={contact.inputDiv}>
                <FormControl fullWidth>
                  <input
                    name="email"
                    id="email"
                    type="email"
                    placeholder="Your Email Address"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                  />
                  <FormHelperText sx={{ color: "red" }} variant="error">
                    {formik.touched.email && formik.errors.email}
                  </FormHelperText>
                </FormControl>
              </div>

              {/* FOURTH */}
              <div className={contact.inputDiv}>
                <FormControl fullWidth>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Your Message"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.message && Boolean(formik.errors.message)
                    }
                  />
                  <FormHelperText sx={{ color: "red" }} variant="error">
                    {formik.touched.message && formik.errors.message}
                  </FormHelperText>
                </FormControl>
              </div>

              {sending === true ? (
                <LoadingSpinner />
              ) : (
                <Button type="submit" className={contact.submit}>
                  Send a Message
                </Button>
              )}
            </Box>
          </Grid>
        </Grid>
      </StyledContainer>
    </main>
  );
}

export default Contact;
