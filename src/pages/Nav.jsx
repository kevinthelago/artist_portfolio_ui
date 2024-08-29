import { Outlet, Link } from "react-router-dom";

const Layout = (props) => {
  return (
    <>
      <nav>
        <div className="nav-title">
          <h1>
            {props.name}
          </h1>
        </div>
        <ul className="nav-links">
          <li id="home" className="nav-link">
            <Link to="/">Home</Link>
          </li>
          <li id="contact" className="nav-link">
            <Link to="/contact">Contact</Link>
          </li>
          <li id="about" className="nav-link">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;