import React, { useState } from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";

const Login = () => {
  const [login, setLogin] = useState({
    name:"",
    email: "",
    password: "",
  });
  const [isLogin, setIsLogin] = useState(true);

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <div className="w-[30rem] h-auto bg-black/80 mx-auto px-16 py-7">
        <h1 className="font-bold text-white text-4xl">{isLogin ? "Sign In" : "Sign Up"}</h1>
        <form className="mt-10 flex flex-col gap-5">
          {!isLogin && (
            <Input
              type="text"
              placeholder="Name"
              value={login.name}
              name="name"
              onChange={handleChange}
            />
          )}
          <Input
            type="email"
            placeholder="Email"
            value={login.email}
            name="email"
            onChange={handleChange}
          />
          <Input
            type="password"
            placeholder="Password"
            value={login.password}
            name="password"
            onChange={handleChange}
          />
          <Button type="submit" label={isLogin ? "Sign In" : "Sign Up"} />
        </form>
        <p className="p-5 text-gray-500 font-bold text-center text-xl">OR</p>
        <p className="text-base text-gray-500 text-center font-medium">
          {isLogin ? "New to Netflix? " : "Already have an account? "}
          <span className="text-white cursor-pointer text-center" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Sign Up Now": "Sign In Now"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
