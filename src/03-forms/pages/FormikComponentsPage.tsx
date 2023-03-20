import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

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

export const FormikComponentsPage = () => {


    return (
        <div>
            <h1>Formik Components Tutorial</h1>

            <Formik initialValues={ initialFormValue } onSubmit={ ( values ) => { console.log( values ) } } validationSchema={ validationSchema }>

                {
                    ( formik ) => (
                        <Form >
                            <label htmlFor="firstName">Nombre</label>
                            <Field type="text" name="firstName" />
                            <ErrorMessage name="firstName" component="span"/>
                            
                            <label htmlFor="lastName">Apellido</label>
                            <Field type="text" name="lastName"  />
                            <ErrorMessage name="lastName" component="span" />
                            
                            <label htmlFor="email">Email</label>
                            <Field type="text" name="email"  />
                            <ErrorMessage name="email" component="span" />
                            
                            <label htmlFor="jobType">Tipo de trabajador</label>
                            <Field as="select" name="jobType">
                                <option value="primera" > Primera Opcion </option>
                                <option value="segunda" > Segunda Opcion </option>
                                <option value="tercera" > Tercera Opcion </option>
                            </Field>
                            <ErrorMessage name="jobType" component="span" />

                            <label>
                                <Field type="checkbox" name="terms"  />
                                Terminos y Condiciones
                            </label>
                            <ErrorMessage name="terms" component="span" />

                            <button type='submit'> Registrar </button>

                        </Form>
                    )
                }

            </Formik>
        </div>
    )

}
