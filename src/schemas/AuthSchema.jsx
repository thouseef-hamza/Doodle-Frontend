import * as yup from 'yup'

export const basicSchema = yup.object().shape({
     email:yup.string().matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,'Please enter a valid email').required("Required"),
     phone_number:yup.string().matches( /^(?:\+?\d{1,3})?[-. (]?\d{3}[-. )]?\d{3}[-. ]?\d{4}$/,'Invalid Phone Number').required("Required"),
     institute_name:yup.string().required("Required"),
     first_name:yup.string().required("Required"),
     last_name:yup.string().required("Required"),
})