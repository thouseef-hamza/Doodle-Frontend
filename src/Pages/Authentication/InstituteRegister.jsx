import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { useNavigate } from "react-router-dom";
import useResponsive from "../../Hooks/useResponsive";
import LogoComponent from "../../Components/Authentication/LogoComponent";
import BoxWrapper from "../../Components/Authentication/BoxWrapper";
import { useFormik } from "formik";
import { basicSchema } from "../../schemas/AuthSchema";
import axios from "axios";
import { AUTH_BASE_URL } from "../../utils/api/api";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import LoadingButton from "@mui/lab/LoadingButton";

const InstituteRegister = () => {
  const isMobile = useResponsive("sm");
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const fullScreen = useResponsive("sm");

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const { values, errors, touched, isSubmitting, handleBlur, handleChange } =
    useFormik({
      initialValues: {
        institute_name: "",
        email: "",
        phone_number: "",
      },
      validationSchema: basicSchema,
    });
  const handleSubmit = async (e) => {
    e.preventDefault();
    setOpen(false);
    try {
      let response = await axios.post(
        AUTH_BASE_URL + "institute/register/",
        {
          institute_name: values.institute_name,
          email: values.email,
          phone_number: values.phone_number,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      let data = response.data.data;
      if (response.status === 201) {
        navigate(`/verifyotp/${data.id}/${values.phone_number}`);
      } else {
        console.log("Something Went Wrong");
      }
    } catch (error) {
      console.log(error);
      if (error.response.status === 404) {
        toast.error(error.response.data.msg, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 4000,
        });
      } else if (error.response.status === 503) {
        toast.warning(error.response.data.msg, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 4000,
        });
      } else if (error.response.status === 400) {
        toast.warning(
          `${error.response.data.email ? error.response.data.email : ""} ${
            error.response.data.phone_number
              ? error.response.data.phone_number
              : ""
          }`,
          {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 5000,
          }
        );
      }
    }
  };
  return (
    <>
      <Button
        sx={{ margin: "10px" }}
        onClick={() => navigate("/register")}
        size="large"
        color="secondary"
      >
        <ArrowBackOutlinedIcon fontSize="large" sx={{ color: "#8338EC" }} />
      </Button>
      <form onSubmit={handleSubmit}>
        <BoxWrapper>
          <ToastContainer />
          <LogoComponent />
          <Typography
            gutterBottom
            sx={{ fontSize: isMobile ? "15px" : "20px" }}
          >
            Create Your Free Account
          </Typography>
          <TextField
            autoFocus
            error={
              errors.institute_name && touched.institute_name ? true : false
            }
            helperText={
              errors.institute_name && touched.institute_name
                ? errors.institute_name
                : null
            }
            id="outlined-basic"
            label="Institute name"
            type="text"
            variant="outlined"
            value={values.institute_name}
            onChange={handleChange}
            onBlur={handleBlur}
            name="institute_name"
            sx={{ width: isMobile ? "70vw" : "40vw" }}
            margin="normal"
          />
          <TextField
            id="outlined-basic"
            error={errors.email && touched.email ? true : false}
            label="Institute Email"
            variant="outlined"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            sx={{ width: isMobile ? "70vw" : "40vw" }}
            margin="normal"
            type="email"
            name="email"
            helperText={
              errors.email && touched.email
                ? errors.email
                : "Avoid personal email"
            }
          />
          <TextField
            id="outlined-basic"
            label="Institute PhoneNumber"
            variant="outlined"
            error={errors.phone_number && touched.phone_number ? true : false}
            helperText={
              errors.phone_number && touched.phone_number
                ? errors.phone_number
                : "Include your region number,Your Avoid personal phone number"
            }
            type="text"
            value={values.phone_number}
            onChange={handleChange}
            onBlur={handleBlur}
            margin="normal"
            name="phone_number"
            sx={{ width: isMobile ? "70vw" : "40vw" }}
            fullWidth
          />
          <Dialog
            fullScreen={fullScreen}
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
          >
            <DialogTitle id="responsive-dialog-title">
              {"Are You Sure?"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                <Alert sx={{ marginBottom: 0 }} severity="info">
                  If you didn&apos;t correct your phone number and your email
                  you wont recieve your Login Credentials 
                </Alert>
                <Alert sx={{ marginBottom: 4 }} severity="warning">
                  Make Sure Your Number starts with Region Number <br /> Eg:-
                  +919876543210
                </Alert>
                Phone Number : {values.phone_number} <br />
                Email : {values.email}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleClose}>
                Edit
              </Button>
              <Button onClick={handleSubmit} type="submit" autoFocus>
                Create
              </Button>
            </DialogActions>
          </Dialog>
          {isSubmitting ? (
            <LoadingButton
              loadingIndicator="Creating..."
              loading={isSubmitting}
              sx={{
                backgroundColor: "#8338EC",
                ":hover": { backgroundColor: "#8338EC" },
              }}
              margin={"10px 0px 0px 0px"}
              variant="contained"
            >
              Loading...
            </LoadingButton>
          ) : (
            <Button
              onClick={handleClickOpen}
              sx={{
                backgroundColor: "#8338EC",
                ":hover": { backgroundColor: "#8338EC" },
              }}
              margin={"10px 0px 0px 0px"}
              variant="contained"
              disabled={
                errors.institute_name || errors.email || errors.phone_number
                  ? true
                  : false
              }
            >
              Create Account
            </Button>
          )}
          <Typography
            margin={"normal"}
            paddingRight={5}
            marginTop={2}
            fontSize={"0.6rem"}
          >
            By clicking the &quot;Create Account&quot; button, you agree to our{" "}
            <span
              style={{
                color: "blue",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Terms of Use
            </span>{" "}
            and{" "}
            <span
              style={{
                color: "blue",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Privacy and Policy
            </span>
          </Typography>
        </BoxWrapper>
      </form>
    </>
  );
};

export default InstituteRegister;
