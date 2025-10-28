import { useRoutes, Navigate } from "react-router";
import Home from "../views/Home";
import About from "../views/Home";
import Resume from "../views/Resume";
import Portfolio from "../views/Portfolio";
import Services from "../views/Services";
import Contact from "../views/Contact";

const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/resume", element: <Resume /> },
    { path: "/portfolio", element: <Portfolio /> },
    { path: "/services", element: <Services /> },
    { path: "/contact", element: <Contact /> },
    { path: "*", element: <Navigate to="/" /> },
  ]);
  return routes;
};

export default Router;
