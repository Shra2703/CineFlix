import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// component
import App from "./App.jsx";

// store
import appStore from "./utils/redux/appStore.js";

// css
import "./index.css";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient} contextSharing>
    <Provider store={appStore}>
      <StrictMode>
        <App />
      </StrictMode>
    </Provider>
  </QueryClientProvider>
);
