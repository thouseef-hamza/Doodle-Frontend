import { AuthInterfaceComponent } from '../../Components/Authentication/AuthInterfaceComponent'


const RegisterInterface = () => {
  return (
    <>
     <AuthInterfaceComponent teacher_title="Are You a Teacher? Looking for job"  institute_title="Are you a Institute? Manage Your Students"  institute_path="/institute/register" institute_image="src/assets/images/InstituteRegister.png" teacher_image="src/assets/images/Teacher.png" />
    </>
  )
}

export default RegisterInterface