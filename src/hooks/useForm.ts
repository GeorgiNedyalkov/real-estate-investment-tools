import { useState } from "react";
import { ReactChangeEvent } from "../types";

export const useForm = <T>(initialState: T) => {
    const [formData, setFormData] = useState(initialState);

    const handleChange = (e: ReactChangeEvent) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return { formData, handleChange };
};
