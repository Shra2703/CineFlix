import { RouterProvider, Outlet } from "react-router-dom";

// components
import Header from "./components/Header";

// hooks
import useRoutes from "./utils/hooks/useRoutes";

export const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
function App() {
  const routerProvider = useRoutes();
  return <RouterProvider router={routerProvider} />;
}

export default App;
