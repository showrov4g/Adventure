import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Route from "./route/Route.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <Route></Route>
      <ToastContainer />
    </AuthProvider>
  </StrictMode>
);
