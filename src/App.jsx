import { createBrowserRouter, RouterProvider } from "react-router-dom";

// components
import SignInOut from "./components/SignInOut";

function App(){

  const router = createBrowserRouter([
    {
      path: "/",
      element:<SignInOut />
    },
    {
      path:"/browse",
      element:<h1>Browse</h1>
    }
  ])
  return(
   <RouterProvider router={router} />
  )
}

export default App;