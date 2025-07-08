import { useState } from "react";
import { useDispatch } from "react-redux";

// components
import Input from "../ui/Input";
import Button from "../ui/Button";

// hooks
import useValidate from "../utils/hooks/useValidate";
import useAuthenticate from "../utils/hooks/useAuthenticate";

// store
import { addUser } from "../utils/redux/slices/userSlice";

const Login = () => {
  const [login, setLogin] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isLogin, setIsLogin] = useState(true);
  const [isHiddenPassword, setIsHiddenPassword] = useState(true);
  const dispatch = useDispatch();

  const { errors, clearError, resetErrors, validateFields } =
    useValidate(isLogin);

  const { authenticateSignUp, signInUpError, authenticateSignIn } =
    useAuthenticate();

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

    if (!isLogin) {
      // sign up authentication logic
      const handleSignUp = async () => {
        const user = await authenticateSignUp(
          login.username,
          login.email,
          login.password
        );
        if (user?.uid) {
          const { uid, email, displayName } = user;
          dispatch(
            addUser({ uid: uid, email: email, displayName: displayName })
          );
        }
      };
      handleSignUp();
    } else {
      // sign in authentication logic
      authenticateSignIn(login.email, login.password);
    }

    resetErrors();
    resetLogin();
  };

  const handleLogin = () => {
    setIsLogin((prev) => !prev);
    resetLogin();
    resetErrors();
  };
  return (
    <div className="relative top-[15%]">
      <div className="w-1/3 h-auto bg-black/80 mx-auto px-16 py-7 max-lg:w-1/2 max-md:w-[85%] max-sm:px-8">
        <h1 className="font-bold text-white text-4xl">
          {isLogin ? "Sign In" : "Sign Up"}
        </h1>
        <Form
          handleChange={handleChange}
          handleFocus={handleFocus}
          handleSubmit={handleSubmit}
          login={login}
          errors={errors}
          signInUpError={signInUpError}
          validateFields={validateFields}
          setIsHiddenPassword={setIsHiddenPassword}
          isLogin={isLogin}
          isHiddenPassword={isHiddenPassword}
        />
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

const Form = ({
  handleSubmit,
  handleChange,
  login,
  handleFocus,
  isLogin,
  errors,
  validateFields,
  isHiddenPassword,
  setIsHiddenPassword,
  signInUpError,
}) => {
  return (
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
        type={isHiddenPassword ? "password" : "text"}
        placeholder="Password"
        value={login.password}
        name="password"
        onChange={handleChange}
        error={errors.password}
        onBlur={() => validateFields(login, "password", login.password)}
        onFocus={handleFocus}
        isHiddenPassword={isHiddenPassword}
        togglePassword={setIsHiddenPassword}
        showToggle={true}
      />
      <Button type="submit" label={isLogin ? "Sign In" : "Sign Up"} />
      {signInUpError && (
        <p className="text-red-500  font-medium text-sm mt-1 mx-2 transition-all duration-300">
          {signInUpError}
        </p>
      )}
    </form>
  );
};
