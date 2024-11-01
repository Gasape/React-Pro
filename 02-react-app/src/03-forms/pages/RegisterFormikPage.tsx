import '../styles/styles.css'
import { Formik } from 'formik';
import * as Yup from 'yup'
import { MyTextInput } from '../components';

export const RegisterFormikPage = () => {

    return (
        <div>
            <h1>RegisterFormikPage</h1>

            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    password2: '',
                }} 
                onSubmit={ (values) => { 
                    console.log(values);
                    
                }}
                validationSchema={ Yup.object({
                    name: Yup.string()
                            .min(2, 'Debe de tener al menos 2 letras')
                            .max(15, 'Debe de tener 15 letras o menos ')
                            .required('El nombre es requerido'),
                    email: Yup.string()
                            .email('Debe de ingresar un correo valido')
                            .required('El email es requerido'),
                    password1: Yup.string()
                            .min(6, 'La contraseña debe de tener un minimo de 6 caracteres')
                            .required('La contraseña es requerida'),
                    password2: Yup.string()
                            .oneOf([Yup.ref('password1')], 'Las Contraseñas deben de coincidir' )
                            .required(),
                })}
            >
                {
                    ( { handleSubmit, handleReset } ) => (
                        <form onSubmit={handleSubmit}>
                            <MyTextInput placeholder='Name' label='Name' name='name'/>
                            <MyTextInput placeholder='example@gmail.com' label='Email' name='email' type='email'/>
                            <MyTextInput placeholder='Password' label='Password' name='password1' type='password'/>
                            <MyTextInput placeholder='Repeat Password' label='Confirm Password' name='password2' type='password' />

                            <button type="submit">Create</button>

                            <button  type='button' onClick={handleReset}>Reset Form</button>
                        </form>
                    )

                }

            </Formik>
            
        </div>
    )
}