import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// components
import SignInOut from "./components/SignInOut";

// pages
import Browse from "./pages/Browse";

// hook
import useAuthenticate from "./utils/hooks/useAuthenticate";

function App() {
  const { authStateChange } = useAuthenticate();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignInOut />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);


  useEffect(() => {
    // whenever the users sign in or signup then actions will be dispatched from the this function
    authStateChange();
  }, []);

  return  <RouterProvider router={router} />;
 
}

export default App;
