import { useField, ErrorMessage } from 'formik';

interface MySelectProps {
    label               : string;
    name                : string;
    placeholder?        : string;
    [comodin: string]   : any 
}

export const MySelect = ( { label, ...props }: MySelectProps ) => {

    const [ field ] = useField( props );

    return (


        <>
            <label htmlFor={ props.id || props.name }>{ label }</label>
            <select { ...field } { ...props }  />
            <ErrorMessage name={ props.name }  component="span" className="" />

        </>


    )
}
