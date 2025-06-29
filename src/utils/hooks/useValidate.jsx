import { useState } from "react";

const useValidate = (isLogin) => {
  const [errors, setErrors] = useState({});


  const validateFields = (login, fieldName = null, fieldValue = null) => {
    const values = fieldName
      ? { [fieldName]: fieldValue }
      : { ...login, ...(isLogin ? {} : { username: login.username }) };


    const newErrors = {};
    if (!isLogin || fieldName === "username") {
      if (!values.username?.trim()) {
        newErrors.username = "Name is required";
      }
    }

    if (fieldName === "email" || !fieldName) {
      if (!values.email?.trim()) {
        newErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        newErrors.email = "Email is invalid";
      }
    }

    if (fieldName === "password" || !fieldName) {
      if (!values.password.trim()) {
        newErrors.password = "Password is required";
      } else if (values.password.length < 6) {
        newErrors.password = "Password must be at least 6 characters";
      }
    }

    setErrors(newErrors);
    console.log(newErrors)
    return newErrors;
  };


  const clearError = (name) => {

    setErrors((prev => ({...prev, [name]:"" })))
    
  }

  const resetErrors = () => {
    setErrors({})
  }

  return { validateFields, errors,resetErrors, clearError };
};

export default useValidate;
