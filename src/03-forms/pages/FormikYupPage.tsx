import { useFormik } from 'formik';
import * as Yup from 'yup';

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

export const FormikYupPage = () => {


    const { 
            handleSubmit, getFieldProps,
            errors, touched 
    } 
    = useFormik({
        initialValues: initialFormValue,
        onSubmit: values => ( console.log(values) ),
        validationSchema: Yup.object({
            firstName   : Yup.string().max(10, 'Debe de tener menos de 10 letras').required('Requerido'),
            lastName    : Yup.string().max(10, 'Debe de tener menos de 10 letras').required('Requerido'),
            email       : Yup.string().email('Email no válido').required('Requerido'),           
        })
    });


    return (
        <div>
            <h1>Formik Yup Tutorial</h1>

            <form onSubmit={ handleSubmit } noValidate autoComplete='off'>
                <label htmlFor="firstName">Nombre</label>
                <input type="text" { ...getFieldProps('firstName') } />

                { touched.firstName && errors.firstName && <span> { errors.firstName } </span> }


                <label htmlFor="lastName">Apellido</label>
                <input type="text" { ...getFieldProps('lastName') } />

                { touched.lastName && errors.lastName && <span> { errors.lastName } </span> }


                <label htmlFor="email">Email</label>
                <input type="email" { ...getFieldProps('email') } />

                { touched.email && errors.email && <span> { errors.email } </span> }


                <button type='submit'> Registrar </button>

            </form>
        </div>
    )

}
