import { useState } from "react";

export function useForm(initialValues, onSubmitHandler) {
    const [formValues, setFormValues] = useState(initialValues);

    function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    }

    function onSubmit(values) {
        onSubmitHandler(values);
    }

    return { formValues, changeHandler, onSubmit };
}
