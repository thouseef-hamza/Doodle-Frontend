import { Dialog, DialogContent, DialogTitle } from '@mui/material';


const StudentAddComp = ({ open ,title,children }) => {
  return (
    <>
      <Dialog open={open}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          {children}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default StudentAddComp