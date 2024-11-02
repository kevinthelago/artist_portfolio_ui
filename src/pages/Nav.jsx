import { useRef, useState } from 'react';
import { Outlet, Link } from "react-router-dom";

const Layout = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const ref = useRef();
  const handleClick = (e) => {
    setIsMenuOpen(!isMenuOpen)
    ref.current.style.width = isMenuOpen ? "0%" : "100%";
    ref.current.style.left = isMenuOpen ? "100%" : "0%";
  }

  return (
    props.artist ?
    <>
      <nav>
        <div className="nav-title">
          <h1>
            {props.artist.name}
          </h1>
        </div>
        <ul ref={ref} className="nav-links">
          <li id="home" className="nav-link">
            <Link onClick={(e) => handleClick(e)} to="/">Home</Link>
          </li>
          <li id="contact" className="nav-link">
            <Link onClick={(e) => handleClick(e)} to="/contact">Contact</Link>
          </li>
          <li id="about" className="nav-link">
            <Link onClick={(e) => handleClick(e)} to="/about">About</Link>
          </li>
        </ul>
        <button onClick={(e) => handleClick(e)} className="nav-links-mobile-navigator flexc">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>
        </button>
      </nav>

      <Outlet />
    </>
    : ""
  )
};

export default Layout;