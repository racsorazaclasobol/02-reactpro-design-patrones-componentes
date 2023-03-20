import { useField, ErrorMessage } from 'formik';

interface MyTextInputProps {
    label               : string;
    name                : string;
    type?               : 'text' | 'email' | 'password' | 'select';
    placeholder?        : string;
    [comodin: string]   : any 
}

export const MyTextInput = ( { label, ...props }: MyTextInputProps ) => {

    const [ field ] = useField( props );

    return (


        <>
            <label htmlFor={ props.id || props.name }>{ label }</label>
            <input type="" { ...field } { ...props } />
            <ErrorMessage name={ props.name }  component="span" className="" />
        </>


    )
}
