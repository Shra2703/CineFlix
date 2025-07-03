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
  const unsubscribe =  authStateChange();

  // unsubscribe when components unmounts
  return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    SignOut();
  };
  return (
    <div className="px-10 py-2 bg-linear-to-b from-black flex justify-between items-center z-1000 fixed top-0">
      <div className="w-[20%]">
        <img
          src={LOGO_URL}
          alt="Netflix Logo"
          className="w-1/2 h-auto p-0 object-cover ml-0"
        />
      </div>

      {user && (
        <UserProfile user={user?.displayName} onSignOut={handleSignOut} />
      )}
    </div>
  );
};

export default Header;
