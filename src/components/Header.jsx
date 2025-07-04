import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// constants
import { LOGO_URL } from "../constanst";

// components
import UserProfile from "./UserProfile";

// hook
import { useAuthStateChange } from "../utils/hooks/useAuthenticate";
import useAuthenticate from "../utils/hooks/useAuthenticate";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { authStateChange } = useAuthStateChange();
  const { SignOut } = useAuthenticate();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    // for scroll listener
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);

    // Auth listener
    const unsubscribe = authStateChange();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      unsubscribe();
    };
  }, []);

  const handleSignOut = () => {
    SignOut();
  };
  return (
    <div
      className={`px-10 py-2  flex justify-between items-center z-1000 fixed top-0 transition-all duration-300 ${
        scrolled ? "bg-black" : "bg-linear-to-b from-black"
      }`}
    >
      <div className="w-[20%] max-lg:w-[40%] max-sm:w-[60%]">
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
