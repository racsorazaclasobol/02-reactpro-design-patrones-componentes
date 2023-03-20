import { useForm } from '../hooks/useForm';

import '../styles/styles.css'

export const RegisterPage = () => {

    const { name, email, password, password2, onChange, resetForm, isValidEmail } = useForm({
        name: '',
        email: '',
        password: '',
        password2:'',
    });

    const onSubmit = ( event: React.FormEvent<HTMLFormElement> ) => {

        event.preventDefault();

    }

    return (
        <div>
            <h1>Register Page</h1>

            <form onSubmit={ onSubmit } autoComplete="off">
                <input type="text" placeholder="Name" value={ name } name="name" onChange={ onChange } className={ `${ name.trim().length <= 0 && 'has-error' }` }/>
                { name.trim().length <= 0 && <span>El name es obligatorio</span> }

                <input type="text" placeholder="Email" value={ email } name="email" onChange={ onChange } className={ `${ !isValidEmail( email ) && 'has-error' }` }/>
                { !isValidEmail( email ) && <span>El email es invalido</span> }

                <input type="password" placeholder="Password" value={ password } name="password" onChange={ onChange }/>
                { password.trim().length <= 0 && <span>El password es obligatorio</span> }
                { password.trim().length < 6 && password.trim().length > 0 && <span>La contraseña debe tener al menos 6 caracteres</span> }

                <input type="password" placeholder="Repeat Password" value={ password2 } name="password2" onChange={ onChange }/>
                { password2.trim().length <= 0 && <span>El password es obligatorio</span> }
                { password2.trim().length < 6 && password.trim().length > 0 && <span>La contraseña debe tener al menos 6 caracteres</span> }
                { password2.trim() !== password.trim() && <span>Las passwords son diferentes</span> }

                <button type="submit">Crear Usuario</button>
                <button onClick={ resetForm }>Limpiar Formulario</button>
            </form>            
        </div>
    )
}
