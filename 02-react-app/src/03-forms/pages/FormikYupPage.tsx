import {useFormik } from 'formik' 
import '../styles/styles.css'
import * as Yup from 'yup'


export const FormikYupPage = () => {

    const { handleSubmit,  errors, touched, getFieldProps } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                            .max(15, 'Debe de tener 15 caracteres o menos')
                            .required('Requerido'),
            lastName: Yup.string()
                            .max(15, 'Debe de tener 15 caracteres o menos')
                            .required('Requerido'),
            email: Yup.string()
                            .email('El correo no tiene un formato valido')
                            .required('Requerido'),
        })
    });

  return (
    <div>
        <h1>Formik Yup</h1>

        <form noValidate onSubmit={ handleSubmit }>
            <label htmlFor="firstName">First Name</label>
            <input  type="text" {...getFieldProps('firstName')}
            />
            { touched.firstName && errors.firstName && <span>{errors.firstName}</span>}

              <label htmlFor="LastName">Last Name</label>
              <input type="text" {...getFieldProps('lastName')}/>
              {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}



              <label htmlFor="firstName">Email Address</label>
              <input type="email" {...getFieldProps('email')}/>
              {touched.email && errors.email && <span>{errors.email}</span>}

              <button type='submit'>Submit</button>
        </form>

    </div>
  )
}