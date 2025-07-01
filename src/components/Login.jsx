import React, { useState } from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import useValidate from "../utils/hooks/useValidate";

const Login = () => {
  const [login, setLogin] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isLogin, setIsLogin] = useState(true);

  const { errors, clearError, resetErrors, validateFields } =
    useValidate(isLogin);

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const handleFocus = (e) => {
    clearError(e.target.name);
  };

  const resetLogin = () => {
    setLogin({
      username: "",
      email: "",
      password: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateFields(login);
    if (Object.keys(validationErrors).length > 0) {
      console.log("Fix errors before submitting.");
      return;
    }

    resetErrors();
    resetLogin();
    console.log("Form submitted successfully");
  };

  const handleLogin = () => {
    setIsLogin((prev) => !prev);
    resetLogin();
    resetErrors();
  };
  return (
    <div>
      <div className="w-[30rem] h-auto bg-black/80 mx-auto px-16 py-7">
        <h1 className="font-bold text-white text-4xl">
          {isLogin ? "Sign In" : "Sign Up"}
        </h1>
        <form className="mt-10 flex flex-col gap-5" onSubmit={handleSubmit}>
          {!isLogin && (
            <Input
              type="text"
              placeholder="Name"
              value={login.username}
              name="username"
              onChange={handleChange}
              error={errors.username}
              onBlur={() => validateFields(login, "username", login.username)}
              onFocus={handleFocus}
            />
          )}
          <Input
            type="email"
            placeholder="Email"
            value={login.email}
            name="email"
            onChange={handleChange}
            error={errors.email}
            onBlur={() => validateFields(login, "email", login.email)}
            onFocus={handleFocus}
          />
          <Input
            type="password"
            placeholder="Password"
            value={login.password}
            name="password"
            onChange={handleChange}
            error={errors.password}
            onBlur={() => validateFields(login, "password", login.password)}
            onFocus={handleFocus}
          />
          <Button type="submit" label={isLogin ? "Sign In" : "Sign Up"} />
        </form>
        <p className="p-5 text-gray-500 font-bold text-center text-xl">OR</p>
        <p className="text-base text-gray-500 text-center font-medium">
          {isLogin ? "New to Netflix? " : "Already have an account? "}
          <span
            className="text-white cursor-pointer text-center"
            onClick={handleLogin}
          >
            {isLogin ? "Sign Up Now" : "Sign In Now"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
