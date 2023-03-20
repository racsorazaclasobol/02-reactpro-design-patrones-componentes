import { useFormik } from 'formik';
import { FormikErrors } from 'formik/dist/types';

import '../styles/styles.css'

interface InitialFormProp {
    firstName   :string;
    lastName    :string;
    email       :string;
}

const initialFormValue: InitialFormProp = {
    firstName   :'',
    lastName    :'',
    email       :'',
}

export const FormikBasicPage = () => {

    const validate = ( formValues: InitialFormProp ) => { 

        const { firstName, lastName, email } = formValues;
        
        const formErrors: FormikErrors<InitialFormProp> = {};

        if( !firstName ) formErrors.firstName = 'Nombre es obligatorio';
        if( firstName.length >= 10 ) formErrors.firstName = 'El campo debe tener no mas de 10 letras';

        
        if( !lastName ) formErrors.lastName = 'Apellido es obligatorio';
        if( lastName.length >= 10 ) formErrors.lastName = 'El campo debe tener no mas de 10 letras';

        if( !email ) formErrors.email = 'Apellido es obligatorio';
        if( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test( email ) ) formErrors.email = 'Email no válido';

        return formErrors;

    }

    const { handleChange, handleSubmit, handleBlur, errors, values, touched } = useFormik({
        initialValues: initialFormValue,
        onSubmit: values => ( console.log(values) ),
        validate,
    });


    return (
        <div>
            <h1>Formik Basic Tutorial</h1>

            <form onSubmit={ handleSubmit } noValidate autoComplete='off'>
                <label htmlFor="firstName">Nombre</label>
                <input type="text" name='firstName' onChange={ handleChange } value={ values.firstName } onBlur={ handleBlur } />

                { touched.firstName && errors.firstName && <span> { errors.firstName } </span> }


                <label htmlFor="lastName">Apellido</label>
                <input type="text" name='lastName' onChange={ handleChange } value={ values.lastName } onBlur={ handleBlur } />

                { touched.lastName && errors.lastName && <span> { errors.lastName } </span> }


                <label htmlFor="email">Email</label>
                <input type="email" name='email' onChange={ handleChange } value={ values.email } onBlur={ handleBlur } />

                { touched.email && errors.email && <span> { errors.email } </span> }


                <button type='submit'> Registrar </button>

            </form>
        </div>
    )

}
