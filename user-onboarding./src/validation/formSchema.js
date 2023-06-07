import * as yup from 'yup';

const formSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required('username is required')
        .min(3, "username must be three characters long"),
    email: yup
        .string()
        .email('must be a valid email')
        .required('Email is required'),
    password: yup
        .string()
        .password('Passeord is required')
        .min(6, 'Password must be 6 characters long'),
    tos: yup
        .boolean()
        .oneOf([true], 'Must accept the terms and conditions')

        
    
    
})

export default formSchema;