import { useState } from "react";


export const useForm = <T extends Object>( intialState: T ) => {
    const [formData, setFormData] = useState( intialState );

    const onHandleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target

        setFormData({ ...formData, [name]: value });
    }

    const onResetForm = () => { 
        setFormData({...intialState});
    }

    const isValidEmail = (email: string) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

  return {
    ...formData,
    formData,

    onHandleChange,
    onResetForm,
    isValidEmail,
  }
}