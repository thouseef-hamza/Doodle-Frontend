import { Alert, AlertTitle, Box, Button, Card, CardActionArea, CardMedia, FormControl, Grid, InputLabel, MenuItem, Paper, Select, Snackbar, TextField, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react'
import SidebarComp from '../../Components/Sidebar/SidebarComp';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate, useParams } from 'react-router-dom';
import UploadIcon from "@mui/icons-material/Upload"; 
import useAxios from '../../Hooks/useAxios';
import SpinnerComp from '../../Components/SpinnerComp';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { deleteStudentDetail, editStudentDetail, getStudentDetail } from '../../Redux/Institute/InsStudents/InsStudentDetailAction';
import { ToastContainer, toast } from 'react-toastify';
import { listBatches } from '../../Redux/Institute/InsBatches/InsBatchesListCreateAction';
import DeleteIcon from "@mui/icons-material/Delete";
import axios from 'axios';

const InsStudentDetailView = () => {
     const navigate=useNavigate()
     const { studentDetail,loading,error } = useSelector( 
       (state) => state.insStudentDetail,shallowEqual
     );
     const { batches } = useSelector( 
       (state) => state.insBatchesListCreate
     );
      const [formData, setFormData] = useState();
      const [changes,setChanges] = useState(true)
     const dispatch = useDispatch()
     const api = useAxios() 
     const {id} = useParams()
     useEffect(() => {
       dispatch(
         getStudentDetail({id,api})
       );
       dispatch(listBatches({id,api}))
     },[]);
     useEffect(()=>{
      setFormData({
        first_name: studentDetail.first_name,
        last_name: studentDetail.last_name,
        email: studentDetail.email,
        phone_number: studentDetail.phone_number,
        unique_code:studentDetail.unique_code,
        student_profile: {
          address: studentDetail.student_profile?.address,
          gender: studentDetail.student_profile?.gender,
          city: studentDetail.student_profile?.city,
          date_of_birth: studentDetail.student_profile?.date_of_birth,
          postal_code: studentDetail.student_profile?.postal_code,
          profile_picture: studentDetail.student_profile?.profile_picture,
          state: studentDetail.student_profile?.state,
        },
        batch_id: studentDetail.student_profile?.batch?.id,
      });
     },[studentDetail])
      const handleInputChange = (event) => {
        setChanges(false)
        const { name, value } = event.target;
        setFormData((state) => {
        const newState = { ...state };
          if (name === "address" || name === "city" || name === "date_of_birth" || name === "gender" || name === "postal_code" || name === "profile_picture" || name === "state") {
            newState.student_profile = { ...newState.student_profile, [name]: value };
          } else if (name === "batch_id") {
              newState[name]= value
          } else {
            newState[name] = value;
          }
          return newState;
        });
        };
      const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(
          editStudentDetail({
            id: id,
            values: formData,
            api: api,
            toast: toast,
          })
        );
      }
      const handleDeleteStudent = (e) => {
        e.preventDefault()
        window.alert("Are You Sure Want To Delete Student")
        dispatch(deleteStudentDetail({
          id:id,
          api:api,
          navigate:navigate,
          toast:toast,
        }))
      }
       const fileInputRef = useRef(null);

       const handleCardClick = () => {
         fileInputRef.current.click();
       };

       const handleImageChange = (file) => { 
        setChanges(false)
        const imageData = new FormData()
        imageData.append("file",file);
        imageData.append(
          "upload_preset",
          import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
        );
        axios
          .post(
            `https://api.cloudinary.com/v1_1/${
              import.meta.env.VITE_CLOUDINARY_NAME
            }/upload/`,
            imageData
          )
          .then((response) => {
            setFormData({
              ...formData,
              student_profile: {
                ...formData.student_profile,
                profile_picture: response.data["secure_url"],
              },
            });
          });
       }
      
  return (
        <SidebarComp>
      {loading ? (
        <SpinnerComp />
      ) : (
          <>
          <ToastContainer />
          {error ? (
            <Snackbar
              anchorOrigin={{ vertical: "top", horizontal: "center" }}
              open={error ? true : false}
              autoHideDuration={6000}
              // onClose={}
              key={"top" + "center"}
            >
              <Alert severity="error">
                {error.message === "Network Error" ? (
                  <AlertTitle>{error.message}</AlertTitle>
                ) : (
                  <>
                    <AlertTitle>{"Invalid Credentials"}</AlertTitle>
                    {[
                      error.response.data?.email,
                      error.response.data?.phone_number,
                    ]}
                  </>
                )}
              </Alert>
            </Snackbar>
          ) : null}
          <Box>
            <Button
              sx={{ position: "absolute", marginTop: 2.5 }}
              onClick={() => navigate("/institute/students")}
              size="large"
              color="secondary"
            >
              <ArrowBackIcon fontSize="large" sx={{ color: "#8338EC" }} />
            </Button>
            <Typography
              color={"#1F2D5A"}
              variant="h4"
              paddingLeft={1}
              marginLeft={7}
              paddingY={3}
            >
              {studentDetail && studentDetail.first_name}
            </Typography>
          </Box>
          <Paper>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2} margin={0} padding={1}>
                <Grid item xs={3}>
                  <Card>
                    <CardActionArea
                      title="click to upload image here"
                      onClick={handleCardClick}
                    >
                      <input
                        type="file"
                        style={{ display: "none" }}
                        ref={fileInputRef}
                        value={""}
                        onChange={(e) => handleImageChange(e.target.files[0])}
                      />
                      <CardMedia
                        loading="lazy"
                        component="img"
                        sx={{ maxHeight: "50vh" }}
                        image={
                          formData && formData.student_profile?.profile_picture
                        }
                        alt="Student Profile"
                      />
                    </CardActionArea>
                  </Card>
                  <Button fullWidth variant="outlined" sx={{ marginTop: 2 }}>
                    {studentDetail && studentDetail.unique_code}
                  </Button>
                  <Button
                    variant="contained"
                    endIcon={<UploadIcon />}
                    fullWidth
                    sx={{ marginTop: 1 }}
                    type="submit"
                    disabled={changes}
                    onClick={() =>
                      window.alert("Are You Sure Want to update data")
                    }
                  >
                    Update student
                  </Button>
                  <Button
                    variant="outlined"
                    endIcon={<DeleteIcon />}
                    fullWidth
                    sx={{ marginTop: 1 }}
                    color="error"
                    onClick={handleDeleteStudent}
                  >
                    Delete Student
                  </Button>
                </Grid>
                <Grid item xs={8}>
                  <Typography variant="h6" padding={2}>
                    Student Details
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <TextField
                        fullWidth
                        label="Firstname"
                        variant="outlined"
                        name="first_name"
                        value={formData && formData.first_name}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        fullWidth
                        label="Lastname"
                        variant="outlined"
                        name="last_name"
                        value={formData && formData.last_name}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        fullWidth
                        label="Email"
                        color="primary"
                        variant="outlined"
                        name="email"
                        value={formData && formData.email}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        fullWidth
                        label="Phone Number"
                        variant="outlined"
                        name="phone_number"
                        value={formData && formData.phone_number}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">  
                          Gender
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          label="Gender"
                          name="gender"
                          onChange={handleInputChange}
                          value={formData && formData.student_profile?.gender || "S"} 
                        >
                          <MenuItem disabled value={"S"}>Select</MenuItem>
                          <MenuItem value={"M"}>Male</MenuItem>
                          <MenuItem value={"F"}>Female</MenuItem>
                          <MenuItem value={"O"}>Other</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={3}>
                      <TextField
                        fullWidth
                        label="Date of Birth"
                        variant="outlined"
                        name="date_of_birth"
                        value={
                          formData && formData.student_profile.date_of_birth
                        }
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <TextField
                        fullWidth
                        label="Unique Code"
                        variant="outlined"
                        name="unique_code"
                        value={formData && formData.unique_code}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <Select
                        labelId="demo-multiple-name-label"
                        id="demo-multiple-name"
                        fullWidth
                        value={formData && formData.batch_id || ""}
                        onChange={(e) => {
                          const select = batches?.find(
                            (x) => x.id === e.target.value
                          );
                          setFormData((state) => ({
                            ...state,
                            batch_id: select.id,
                          }));
                        }}
                        label="Batch Name"
                      >
                        <MenuItem disabled value="S"> Select</MenuItem>
                        {batches && batches?.map((batch) => (
                          <MenuItem key={batch.id} value={batch.id}>
                            {batch.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </Grid>
                    <Typography variant="h6" padding={2}>
                      Student Profile Details
                    </Typography>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Address"
                        variant="outlined"
                        name="address"
                        multiline
                        value={formData && formData.student_profile?.address}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <TextField
                        fullWidth
                        label="City"
                        variant="outlined"
                        name="city"
                        value={formData && formData.student_profile?.city}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <TextField
                        fullWidth
                        label="State"
                        variant="outlined"
                        name="state"
                        value={formData && formData.student_profile?.state}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid item xs={4} marginBottom={3}>
                      <TextField
                        fullWidth
                        label="Postal Code"
                        name="postal_code"
                        variant="outlined"
                        value={
                          formData && formData.student_profile?.postal_code
                        }
                        onChange={handleInputChange}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          </Paper>
          </>
      )}
      </SidebarComp>
  );
}

export default InsStudentDetailView