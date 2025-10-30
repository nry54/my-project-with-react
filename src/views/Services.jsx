import { Outlet, NavLink } from "react-router";

const Services = () => {
  return (
    <>
      <h2> Services </h2>
      <Outlet />

      <nav>
        <NavLink to="web-sites">Web Sites</NavLink>
      </nav>
    </>
  );
};

export default Services;
