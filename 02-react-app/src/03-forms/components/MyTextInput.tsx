import { ErrorMessage, useField } from "formik"

interface Props {
    name: string,
    label: string,
    type?: 'text' | 'email' | 'password';
    placeholder?: string;
    [x: string]: any;
}

export const MyTextInput = ( { label, ...props } : Props) => {

   const [ field,  /* meta */ ] = useField(props);

  return (
    <>
        <label htmlFor={ props.id || props.name}>{label}</label>
        <input { ...field } {...props} className="text-input"/>
        <ErrorMessage name={ props.name } component={'span'} className="custom-span-error-class"/>
       {/* {
            meta.touched && meta.error && (
                <span  className="error">{ meta.error }</span>
            )
       } */}
    </>
  )
}