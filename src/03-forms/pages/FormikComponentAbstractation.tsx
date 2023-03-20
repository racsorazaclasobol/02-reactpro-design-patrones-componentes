import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MyCheckBox, MySelect, MyTextInput } from '../components';

import '../styles/styles.css'

interface InitialFormProp {
    firstName   :string;
    lastName    :string;
    email       :string;
    terms       :boolean;
    jobType     :string;
}

const initialFormValue: InitialFormProp = {
    firstName   :'',
    lastName    :'',
    email       :'',
    terms       :false,
    jobType     :'',
}

const validationSchema = Yup.object({
    firstName   : Yup.string().max(10, 'Debe de tener menos de 10 letras').required('Requerido'),
    lastName    : Yup.string().max(10, 'Debe de tener menos de 10 letras').required('Requerido'),
    email       : Yup.string().email('Email no válido').required('Requerido'),         
    terms       : Yup.boolean().isTrue('Los Terminos y condiciones son obligatorios'),  
    jobType     : Yup.string().notOneOf(['tercera'], 'Esta opción no está permitida').required('Requerido'),      
})

export const FormikComponentAbstractation = () => {


    return (
        <div>
            <h1>Formik Components Abstractation Tutorial</h1>

            <Formik initialValues={ initialFormValue } onSubmit={ ( values ) => { console.log( values ) } } validationSchema={ validationSchema }>

                {
                    ( formik ) => (
                        <Form >

                            <MyTextInput label="Nombre" name="firstName" placeholder="Nombre" />

                            <MyTextInput label="Apellido" name="lastName" placeholder="Apellido" />

                            <MyTextInput label="Correo" name="email" placeholder="Correo" type='email' />

                            <MySelect label="Tipo de Trabajador" name="jobType" >
                                <option value="" > Seleccione una opción </option>
                                <option value="primera" > Primera Opcion </option>
                                <option value="segunda" > Segunda Opcion </option>
                                <option value="tercera" > Tercera Opcion </option>
                            </MySelect>

                            <MyCheckBox label="Terminos y condiciones" name="terms" />

                            <button type='submit'> Registrar </button>

                        </Form>
                    )
                }

            </Formik>
        </div>
    )

}
