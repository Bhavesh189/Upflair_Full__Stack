import React from "react";
import '../css/Navbar.css'
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bgg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#" onClick={() => navigate('/')}>
          Infinity
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="#" onClick={() => navigate('/')}>
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => navigate('/contact')}>
                Contact
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => navigate('/timing')}>
                Timing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => navigate('/menu')}>
                Menu
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>

              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <a className="dropdown-item" href="#" onClick={() => navigate('/bookroom')}>
                    Book Room
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="#" onClick={() => navigate('/lunch')}>
                    Diner, Lunch or anything
                  </a>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;