import { RouterProvider, Outlet } from "react-router-dom";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";

// hooks
import useRoutes from "./utils/hooks/useRoutes";

export const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
function App() {
  const routerProvider = useRoutes();
  return <RouterProvider router={routerProvider} />;
}

export default App;
