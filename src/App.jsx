import InstituteRegister from "./Pages/Authentication/InstituteRegister"
import RegisterInterface from "./Pages/Authentication/RegisterInterface"
import FirstPage from "./Pages/Home/FirstPage"
import FooterPage from "./Pages/Home/FooterPage"
import SecondPage from "./Pages/Home/SecondPage"
import ThirdPage from "./Pages/Home/ThirdPage"

import LoginInterface from "./Pages/Authentication/LoginInterface"

function App() {

  return (
    <>
    <FirstPage/>
    <SecondPage/>
    <ThirdPage/>
    <FooterPage/>
    <LoginInterface/>
    <InstituteRegister/>
    <RegisterInterface/>
    </>
  )
}

export default App
