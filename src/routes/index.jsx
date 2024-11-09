import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout";
import Landing from "../pages/Landing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
    ],
  },
]);

export default router;
