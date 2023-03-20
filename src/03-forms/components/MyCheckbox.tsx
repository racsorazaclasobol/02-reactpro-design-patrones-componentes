import { useField, ErrorMessage } from 'formik';

interface MyCheckBoxProps {
    label               : string;
    name                : string;
    [comodin: string]   : any 
}

export const MyCheckBox = ( { label, ...props }: MyCheckBoxProps ) => {

    const [ field, meta ] = useField( {...props, type:'checkbox'} );

    return (


        <>
            <label>
                <input type="checkbox" { ...field } { ...props } />
                { label }
            </label>
            <ErrorMessage name={ props.name }  component="span" className="" />

        </>


    )
}
