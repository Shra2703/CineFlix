import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

// constants
import { LOGO_URL } from "../constanst";

// components
import UserProfile from "./UserProfile";
import Button from "../ui/Button"

// hook
import { useAuthStateChange } from "../utils/hooks/useAuthenticate";
import useAuthenticate from "../utils/hooks/useAuthenticate";

// redux store
import { toggleGptSearch } from "../utils/redux/slices/gptSlice";



const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const dispatch = useDispatch()
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

  const handleGptToggle = () => {
    dispatch(toggleGptSearch())
  }
  return (
    <div
      className={`px-10 py-2  flex justify-between items-center z-1000 fixed top-0 transition-all duration-300 ${
        scrolled ? "bg-black" : "bg-linear-to-b from-black"
      }`}
    >
      <div className="w-[20%] max-lg:w-[40%] max-sm:w-[60%]">
        <Link to="/browse">
          <img
            src={LOGO_URL}
            alt="Netflix Logo"
            className="w-1/2 h-auto p-0 object-cover ml-0"
          />
        </Link>
      </div>

      {user && (
        <div className="border flex items-center gap-2">
        <Button label="GPT Search" classname="px-3 py-5 bg-transparent border rounded hover:!bg-black" onClick={handleGptToggle}/>
        <UserProfile user={user?.displayName} onSignOut={handleSignOut} />
        </div>
      )}
    </div>
  );
};

export default Header;
