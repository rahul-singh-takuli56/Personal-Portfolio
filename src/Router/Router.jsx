import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { About, Contact, Education, Project } from "../components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/projects",
    element: <Project />,
  },
  {
    path: "/education",
    element: <Education />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);
export default router;
