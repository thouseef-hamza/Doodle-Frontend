import * as yup from 'yup'

export const basicSchema = yup.object().shape({
     email:yup.string().email("Please enter a valid email").required("Required"),
     phone_number:yup.number().positive().integer().required("Required"),
     institute_name:yup.string().required("Required")

})