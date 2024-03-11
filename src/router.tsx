import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomeScreen from "./screens/home/Home";
import ErrorNotFoundScreen from "./screens/error/ErrorNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomeScreen />,
      },
    ],
    errorElement: <ErrorNotFoundScreen />,
  },
]);

export default router;
