import {
  Box,
  Card,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect,useState } from "react";
import StuSidebarComp from "../../Components/Sidebar/StuSidebarComp";
import { ToastContainer, toast } from "react-toastify";
import useAxios from "../../Hooks/useAxios";
import { STUDENT_BASE_URL } from "../../utils/api/api";
import { useNavigate } from "react-router-dom";

const ProductDisplay = ({handleCheckout}) => (
  <section>
    <div className="product">
      <img
        src="https://i.imgur.com/EHyR2nP.png"
        alt="The cover of Stubborn Attachments"
      />
      <div className="description">
        <h3>Stubborn Attachments</h3>
        <h5>$20.00</h5>
      </div>
    </div>
    <form onClick={handleCheckout}>
      <button type="submit">Checkout</button>
    </form>
  </section>
);

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

const StuPayments = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);
  const api=useAxios()
  const navigate = useNavigate()
  const handleCheckout = async (e) =>{
    e.preventDefault()
    try{
      const response = await api.post(
        STUDENT_BASE_URL + "stripe/create/checkout/session/"
      );
      console.log(response.data);
      if (response.status === 200 ){
        window.location.href = response.data;
      }
    }catch(error){
      console.log(error);
    }
  }
  return (
    <>
      <StuSidebarComp>
        <ToastContainer />
        <Box>
          <Typography
            color={"#1F2D5A"}
            variant="h4"
            paddingLeft={1}
            paddingY={3}
          >
            Payments
          </Typography>
        </Box>
        {/* <Grid container spacing={2}>
          <Grid item sm={3}>
            <Card>

            <TextField name="" />
            </Card>
          </Grid>
        </Grid> */}
        {
          message ? (
          <Message message={message} />
          ) : (
          <ProductDisplay handleCheckout={handleCheckout} />
          )
        }
        </StuSidebarComp>
    </>
  );
};

export default StuPayments;



