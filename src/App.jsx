import { createBrowserRouter, RouterProvider } from "react-router-dom";

// components
import SignInOut from "./components/SignInOut";

// pages
import Browse from "./pages/Browse";

function App() {
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


  return  <RouterProvider router={router} />;
 
}

export default App;
