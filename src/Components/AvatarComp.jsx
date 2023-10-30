import { Avatar } from '@mui/material';

const AvatarComp = () => {
  return (
    <>
      <Avatar
        alt="Remy Sharp"
        src="/src/assets/images/Login.png"
        sx={{
          width: 60,
          height: 60,
          marginRight: 2,
          border: "1px solid #A47DFD",
        }}
      />
    </>
  );
}

export default AvatarComp