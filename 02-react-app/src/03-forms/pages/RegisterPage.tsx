import '../styles/styles.css'
import { useForm } from '../hooks/useForm'

// type Form = {
//     name: string,
//     email: string,
//     password1: string,
//     password2: string
// }

export const RegisterPage = () => {

    const { name, email, password1, password2, onHandleChange, formData, onResetForm, isValidEmail } = useForm({
        name: '',
        email: '',
        password1: '',
        password2: '',
    });

    const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
        
    }

    return (
        <div>
            <h1>RegisterPage</h1>
            <form onSubmit={onHandleSubmit} noValidate>
                <input
                    type="text"
                    placeholder="Name"
                    value={ name }
                    name='name'
                    onChange={onHandleChange}
                    className={` ${name.trim().length <= 0 && 'has-error' } `}
                />
                { name.trim().length <= 0 && <span>Este campo es necesario</span> }
                <input
                    type="email"
                    placeholder="Email"
                    value={ email }
                    name='email'
                    onChange={onHandleChange}
                    className={` ${!isValidEmail(email) && 'has-error'} `}
                />
                { !isValidEmail( email ) && <span>El Email no es válido </span> }
                <input
                    type="password"
                    placeholder="Password"
                    value={ password1 }
                    name='password1'
                    onChange={onHandleChange}
                />
                { password1.trim().length <= 0 && <span>Este campo es necesario</span> }
                { password1.trim().length < 6 && password1.trim().length > 0 && <span>La contraseña tiene que tener al menos 6 caracteres</span> }

                <input
                    type="password"
                    placeholder="Repeat Password"
                    value={ password2 }
                    name='password2'
                    onChange={onHandleChange}
                />
                { password2.trim().length <= 0 && <span>Este campo es necesario</span> }
                { password2 !== password1 && password2.trim().length > 0 && <span>Las contraseña no coinciden</span> }


                <button type="submit">Create</button>

                <button type='button' onClick={onResetForm}>ResetForm</button>
            </form>
        </div>
    )
}