import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { auth } from "../utils/firebase";

// constants
import { LOGO_URL } from "../constanst";

// components
import UserProfile from "./UserProfile";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="px-28 pt-10 pb-5 bg-linear-to-b from-black flex justify-between">
      <div className="w-xl">
        <img
          src={LOGO_URL}
          alt="Netflix Logo"
          className="w-[9rem] h-[2.5rem] object-contain"
        />
      </div>

      {user && (
        <UserProfile user={user?.displayName} onSignOut={handleSignOut} />
      )}
    </div>
  );
};

export default Header;
