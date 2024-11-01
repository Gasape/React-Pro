import { Form, Formik } from 'formik'
import formJson from '../data/custom-form.json'
import { MySelect, MyTextInput } from '../components';
import * as Yup from 'yup'

const initialValues: { [key: string]: any} = {};
const requiredFields: { [key: string]: any } = {};

for (const input of formJson) {
  initialValues[ input.name ] = input.value

  if ( !input.validations ) continue;

  let schema = Yup.string()

  for (const rule of input.validations) {
    
    if (rule.type === 'required') {
      schema = schema.required(`${input.label} es requerido`);
    } 

    if (rule.type === 'minLenght') {
      schema = schema.min((rule as any).value || 1, `minimo de ${(rule as any).value || 1} caracteres`);
    }

    if (rule.type === 'maxLenght') {
      schema = schema.max((rule as any).value || 20, `Maximo de ${(rule as any).value || 20} caracteres`);
    }

    if (rule.type === 'email') {
      schema = schema.email(`Correo no valido`);
    }
    // ... otras reglas
  }

  requiredFields[input.name] = schema
}

const validationSchema = Yup.object({ ...requiredFields });

export const DynamicForm = () => {
  return (
    <div>
        <h1>Dynamic Form</h1>

        <Formik
          initialValues={initialValues}
          onSubmit={ (values) => { 
            console.log(values);
            
          } }
          validationSchema={ validationSchema }
        >
            {
                ( formik ) => (
                  <Form>
                    { formJson.map(( { type, name, placeholder, label, options }) => {

                      if (type === 'input' || type === 'password' || type === 'email' ) {
                        return <MyTextInput 
                                type={(type as any)} 
                                name={name} 
                                label={label} 
                                placeholder={placeholder} 
                                key={name}
                                />
                      }else if( type === 'select'){
                        return (
                          <MySelect 
                              key={name}
                              label={label}
                              name={name} 
                            >
                              <option value="">Select an option</option>
                              {
                                options?.map( opt => (
                                  <option key={opt.id} value={opt.id}>{opt.label}</option>
                                ) )
                              }
                          </MySelect>
                        )
                      }
                       throw new Error(`El type: ${type}, no es soportado`);
                       
                      
                    }) }

                    <button type='submit'>Submit</button>
                  </Form>
                )
            }
        </Formik>

    </div>
  )
}