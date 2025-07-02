import { useEffect } from "react";
import { useSelector } from "react-redux";

// constants
import { LOGO_URL } from "../constanst";

// components
import UserProfile from "./UserProfile";

// hook
import { useAuthStateChange } from "../utils/hooks/useAuthenticate";
import useAuthenticate from "../utils/hooks/useAuthenticate";

const Header = () => {
  const { authStateChange } = useAuthStateChange();
  const { SignOut } = useAuthenticate();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    // whenever the users sign in or signup then actions will be dispatched from the this function
    authStateChange();
  }, []);

  const handleSignOut = () => {
    SignOut();
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
