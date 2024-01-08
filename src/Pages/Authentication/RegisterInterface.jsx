import { AuthInterfaceComponent } from '../../Components/Authentication/AuthInterfaceComponent'
import InstituteImage from '../../assets/images/InstituteRegister.png'
import TeacherImage from '../../assets/images/Teacher.png'


const RegisterInterface = () => {
  return (
    <>
     <AuthInterfaceComponent teacher_title="Are You a Teacher? Looking for job"  institute_title="Are you a Institute? Manage Your Students"  institute_path="/institute/register" institute_image={InstituteImage} teacher_image={TeacherImage} />
    </>
  )
}

export default RegisterInterface