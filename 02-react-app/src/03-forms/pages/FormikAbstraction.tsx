import { Formik } from 'formik' 
import '../styles/styles.css'
import * as Yup from 'yup'
import { MyTextInput, MyCheckbox, MySelect } from '../components/'

export const FormikAbstraction = () => {

  return (
    <div>
          <h1>Formik Abstraction</h1>

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
                    .required('Requerido')
                    .notOneOf(['IT-junior'], 'Esta opción no es permitida ')
              })}
          >
            {
                ( { handleSubmit } ) => (
                    <form onSubmit={handleSubmit}>
                        <MyTextInput label='First Name' name='firstName' placeholder='Nombre'/>

                        <MyTextInput label='Last Name' name='lastName' placeholder='Apellido' />

                        <MyTextInput label='Email Address' name='email' placeholder='example@mail.com' type='email' />


                        <MySelect label='Job Type' name='jobType' >
                            <option value="">Pick something</option>
                            <option value="developer">developer</option>
                            <option value="designer">designer</option>
                            <option value="IT-senior">IT senior</option>
                            <option value="IT-junior">IT junior</option>
                        </MySelect>

                        <MyCheckbox label="Terms and conditions" name='terms'/>

                        <button type='submit'>Submit</button>
                    </form>
                )
            }
        </Formik>

        

    </div>
  )
}