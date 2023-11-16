import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { Button, Container } from "@mui/material";

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));



export const Search = styled("div")(({ theme }) => ({
  position: "relative",
  maxWidth:"50vw",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));
export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  borderRadius: 4,
  backgroundColor: "#ECE9FD",
  color: theme.palette.text.primary,
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 15, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const SearchBar = ({children}) => {
  
  return (
    <>
    <Container sx={{display:'flex',alignItems:'center',marginLeft:-3}}>
     <Search>
     <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          />
          <Button sx={{marginLeft:1,marginBottom:0.45}} variant="contained">Search</Button>
     </Search>
     {children}
      </Container>
    </>
  );
};

export default SearchBar;
