import "../style/bar.scss";
import { Link } from "react-router-dom";

export const Bar = () => {
  return (
    <nav
      className="navbar navbar-expand-md bg-body-tertiary"
      aria-controls="responsive-navbar-nav"
      id="nav"
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          BLACK WOLF
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="navbar-brand" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="navbar-brand" to="/3d">
                Impresion 3D
              </Link>
            </li>
            <li className="nav-item">
              <Link className="navbar-brand" to="/gym">
                Gym
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
