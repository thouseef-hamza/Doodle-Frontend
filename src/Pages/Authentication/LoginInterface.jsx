import { AuthInterfaceComponent } from '../../Components/Authentication/AuthInterfaceComponent'
import InstituteImage from '../../assets/images/InstituteLogin.png'
import TeacherImage from '../../assets/images/TeacherLogin.png'
const LoginInterface = () => {
  return (
    <>
     <AuthInterfaceComponent 
     teacher_title="Teacher Login"  
     institute_title="Institute Login"  
     student_title="Student Login"
     teacher_path="" 
     student_path="/student/login"
     institute_path="/institute/login" 
     institute_image={InstituteImage}
     teacher_image={TeacherImage}
     />
    </>
  )
}

export default LoginInterface