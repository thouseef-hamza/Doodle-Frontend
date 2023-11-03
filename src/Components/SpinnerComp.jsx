import { HashLoader } from 'react-spinners';

const SpinnerComp = () => {
  return (
    <>
      <HashLoader
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "25%",
        }}
        color="#7E56D8"
      />
    </>
  );
}

export default SpinnerComp