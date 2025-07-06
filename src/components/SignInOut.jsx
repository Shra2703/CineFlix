import { BACKGROUND_IMG_URL } from "../constanst";
import Header from "./Header";
import Login from "./Login";

const SignInOut = () => {
  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center bg-cover bg-no-repeat bg-center font-roboto"
      style={{ backgroundImage: `url(${BACKGROUND_IMG_URL})` }}
    >
      <div className="w-full h-full bg-black/50 absolute top-0 left-0">
        <Header />
        <Login />
      </div>
    </div>
  );
};

export default SignInOut;
