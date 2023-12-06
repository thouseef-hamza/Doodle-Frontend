import { AuthInterfaceComponent } from '../../Components/Authentication/AuthInterfaceComponent'

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
     institute_image="src/assets/images/InstituteLogin.png" 
     teacher_image="src/assets/images/TeacherLogin.png" 
     />
    </>
  )
}

export default LoginInterface