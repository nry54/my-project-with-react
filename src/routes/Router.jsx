import { useRoutes, Navigate } from "react-router";
import Home from "../views/Home";
import About from "../views/About";
import Resume from "../views/Resume";
import Portfolio from "../views/Portfolio";
import Services from "../views/Services";
import Contact from "../views/Contact";
import WebSites from "../views/WebSites";

const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/resume", element: <Resume /> },
    { path: "/portfolio", element: <Portfolio /> },
    {
      path: "/services",
      element: <Services />,
      children: [
        { index: true, element: <Navigate to="web-sites" /> },
        {
          path: "web-sites",
          element: <WebSites />,
        },
      ],
    },
    { path: "/contact", element: <Contact /> },
    { path: "*", element: <Navigate to="/" /> },
  ]);
  return routes;
};

export default Router;
