import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

// components
import SignInOut from "./components/SignInOut";

// redux store
import appStore from "./utils/redux/appStore";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignInOut />,
    },
    {
      path: "/browse",
      element: <h1>Browse</h1>,
    },
  ]);
  return (
    <Provider store={appStore}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
