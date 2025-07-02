import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

// component
import App from "./App.jsx";

// store
import appStore from "./utils/redux/appStore.js";

// css
import "./index.css";

createRoot(document.getElementById("root")).render(
  <Provider store={appStore}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);
