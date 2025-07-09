import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// components
import SignInOut from "./components/SignInOut";
import Header from "./components/Header";

// pages
import Browse from "./pages/Browse";
import MovieDetails from "./pages/MovieDetails";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
function App() {
  const routerProvider = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <SignInOut />,
        },
        {
          path: "/browse",
          element: <Browse />,
        },
        {
          path: "/browse/details-movies/:id",
          element: <MovieDetails />,
        },
        {
          path: "/browse/details-shows/:id",
          element: <MovieDetails />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routerProvider} />;
}

export default App;
