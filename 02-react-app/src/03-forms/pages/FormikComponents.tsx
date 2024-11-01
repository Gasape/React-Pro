import {Formik, Field, ErrorMessage } from 'formik' 
import '../styles/styles.css'
import * as Yup from 'yup'


export const FormikComponents = () => {

  return (
    <div>
        <h1>Formik Components</h1>

          <Formik 
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              terms: false,
              jobType: '',
            }}
            onSubmit={ ( values ) => {
                console.log(values);
            }}
            validationSchema={ Yup.object({
                firstName: Yup.string()
                    .max(15, 'Debe de tener 15 caracteres o menos')
                    .required('Requerido'),
                lastName: Yup.string()
                    .max(15, 'Debe de tener 15 caracteres o menos')
                    .required('Requerido'),
                email: Yup.string()
                    .email('El correo no tiene un formato valido')
                    .required('Requerido'),
                terms: Yup.boolean()
                    .isTrue('Debes de aceptar los terminos y condiciones'),
                jobType: Yup.string()
                    .required('Debes de seleccionar un elemento.')
                    .notOneOf(['IT-junior'], 'Esta opción no es permitida ')
              })}
          >
            {
                ( { handleSubmit } ) => (
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="firstName">First Name</label>
                        <Field name="firstName" type="text" />
                        <ErrorMessage name='firstName' component={'span'}/>

                        <label htmlFor="LastName">Last Name</label>
                        <Field name="lastName" type="text" />
                        <ErrorMessage name='lastName' component={'span'} />

                        <label htmlFor="firstName">Email Address</label>
                        <Field name="email" type="email" />
                        <ErrorMessage name='email' component={'span'} />

                        <label htmlFor="jobType">Job Type</label>
                        <Field name="jobType" as="select" >
                            <option value="">Pick something</option>
                            <option value="developer">developer</option>
                            <option value="designer">designer</option>
                            <option value="IT-senior">IT senior</option>
                            <option value="IT-junior">IT junior</option>
                        </Field>
                        <ErrorMessage name='jobType' component={'span'} />

                        <label>
                            <Field name="terms" type="checkbox" /> Terms and conditions
                        </label>
                        <ErrorMessage name='terms' component={'span'} />

                        <button type='submit'>Submit</button>
                    </form>
                )
            }
        </Formik>

        

    </div>
  )
}