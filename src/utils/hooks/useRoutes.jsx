import { createBrowserRouter } from "react-router-dom";

// components
import SignInOut from "../../components/SignInOut";
import MovieDetailsLayout from "../../pages/MovieDetailsLayout";
import Videos from "../../components/MovieDetails/Videos";
import { AppLayout } from "../../App";

// pages
import Browse from "../../pages/Browse";
import MovieDetails from "../../pages/MovieDetails";
import MovieSearch from "../../pages/MovieSearch";

const useRoutes = () => {
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
          path: "/explore",
          element: <MovieSearch />,
        },
        {
          path: "/browse",
          element: <Browse />,
        },
        {
          path: "/browse/details-movies/:id",
          element: <MovieDetailsLayout />,
          children: [
            {
              index: true,
              element: <MovieDetails />,
            },
            {
              path: "video/:videoId",
              element: <Videos />,
            },
          ],
        },
        {
          path: "/browse/details-shows/:id",
          element: <MovieDetailsLayout />,
          children: [
            {
              index: true,
              element: <MovieDetails />,
            },
            {
              path: "video/:videoId",
              element: <Videos />,
            },
          ],
        },
      ],
    },
  ]);
  return routerProvider;
};

export default useRoutes;
