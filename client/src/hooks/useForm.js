// write your custom hook here to control your checkout form
import { useState } from "react";

export const useForm = (initialState, key) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(key);
  const [values, setValues] = useState(
    initialState,
    key
  );

  const handleChanges = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setShowSuccessMessage(true);
    
  };

  return [values, showSuccessMessage, handleChanges, handleSubmit];
};