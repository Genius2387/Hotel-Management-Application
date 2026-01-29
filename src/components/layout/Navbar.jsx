import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top">
      <div className="container">

        {/* BRAND (LEFT) */}
        <Link className="navbar-brand fw-bold fs-4" to="/">
          🏨 OceanView
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">

          {/* CENTER MENU */}
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-center">
            {!user || user.role === "user" ? (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/rooms">Rooms</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/services">Services</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/gallery">Gallery</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">Contact</NavLink>
                </li>
                {user && (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/my-bookings">My Bookings</NavLink>
                </li>
                )}
              </>
            ) : null}

            {user?.role === "admin" && (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/admin/dashboard">Dashboard</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/admin/manage-rooms">Manage Rooms</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/admin/view-bookings">View Bookings</NavLink>
                </li>
              </>
            )}
          </ul>

          {/* RIGHT MENU */}
          <div className="d-flex align-items-center gap-2">
            {!user ? (
              <>
                <NavLink to="/login" className="btn btn-outline-light btn-sm px-3">
                  Login
                </NavLink>
                <NavLink to="/register" className="btn btn-primary btn-sm px-3">
                  Register
                </NavLink>
              </>
            ) : (
              <>
                <span className="text-white small me-2">
                  Hi, <strong>{user.name}</strong>
                </span>

                {user.role === "user" && (
                  <NavLink
                    to="/booking"
                    className="btn btn-warning btn-sm px-3"
                  >
                    Book Now
                  </NavLink>
                )}

                <button
                  onClick={handleLogout}
                  className="btn btn-danger btn-sm px-3"
                >
                  Logout
                </button>
              </>
            )}
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
