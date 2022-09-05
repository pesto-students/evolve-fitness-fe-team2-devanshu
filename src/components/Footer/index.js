import React from "react";
import classNamees from "./footer.module.css";
import { Link } from "react-router-dom";
import Logo from "../../assests/headerIcons/Logo.png";
import { selectCity } from "../../Redux/features/UserSlice";
import { useSelector } from "react-redux/es/exports";

function Footer() {
  let city = useSelector(selectCity);
  return (
    <div className={classNamees.FooterContainer}>
      <footer className="text-center text-lg-start text-white">
        <div className="container p-4">
          <div className="row my-4">
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <div
                className=" shadow-1-strong d-flex align-items-center justify-content-center mb-4 mx-auto"
                style={{ width: "150px", height: "150px" }}
              >
                <img src={Logo} height="70" alt="" loading="lazy" />
              </div>

              <p className="text-center">Fitness center at one place</p>

              <ul className="list-unstyled d-flex flex-row justify-content-center">
                <li>
                  <a
                    className="text-white px-2"
                    href="https://www.facebook.com/"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <i className="fab fa-facebook-square"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/"
                    target={"_blank"}
                    className="text-white"
                    rel="noreferrer"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="text-white ps-2"
                    href="https://www.youtube.com/"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4">MENU</h5>

              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link to="/" className="text-white">
                    Dashboard
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/blog" className="text-white">
                    Blog
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to={`/Fitness-center/${city}/gym`}
                    className="text-white"
                  >
                    Gym Center
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to={`/Fitness-center/${city}/yoga`}
                    className="text-white"
                  >
                    Yoga Center
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to={`/Fitness-center/${city}/zumba`}
                    className="text-white"
                  >
                    zumba Center
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to={`/Fitness-center/${city}/martialart`}
                    className="text-white"
                  >
                    Martial Art Center
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4">For Fitness Center</h5>

              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link to="/partner-with-us" className="text-white">
                    partner-with-us
                  </Link>
                </li>
                {/* <li className="mb-2">
                  <Link to="/contact-us" className="text-white">
                    contact us
                  </Link>
                </li> */}
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4">Contact</h5>

              <ul className="list-unstyled">
                <li>
                  <p>
                    <i className="fas fa-map-marker-alt pe-2"></i>Warsaw, 57
                    Street, Poland
                  </p>
                </li>
                <li>
                  <a href="tel:+91 882-783-1093" className="text-white">
                    <p>
                      <i className="fas fa-phone pe-2"></i>
                      +91 882-783-1093
                    </p>
                  </a>
                </li>
                <li>
                  <a href="mailto:contact@example.com" className="text-white">
                    <p>
                      <i className="fas fa-envelope pe-2 mb-0"></i>
                      contact@example.com
                    </p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          Copyright © {new Date().getFullYear()} Evolve Fitness All rights
          reserved.
        </div>
      </footer>
    </div>
    // End of .container -->
  );
}

export default Footer;
