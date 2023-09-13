import { useState } from "react";

export function useForm(inputValues = {}, validDefaultValue = false) {
  const [values, setValues] = useState(inputValues);
  const [isValid, setIsValid] = useState(validDefaultValue);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const target = event.target;
    const { value, name, validationMessage } = event.target;

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: validationMessage });
    setIsValid(target.closest('form').checkValidity());
  };
  return { values, handleChange, setValues, isValid, errors };
}