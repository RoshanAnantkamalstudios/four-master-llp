import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavbarV2 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imgattr = "logo";
    let anchor = "#";
    return (
      <div className="navbar-area navbar-area-3">
        <nav className="navbar navbar-expand-lg">
          <div className="container nav-container">
            <div className="responsive-mobile-menu">
              <button
                className="menu toggle-btn d-block d-lg-none"
                data-target="#dkt_main_menu"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-left" />
                <span className="icon-right" />
              </button>
            </div>
            <div className="logo">
              <Link to="/">
                <img src={publicUrl + "assets/img/logo.png"} alt="img" />
              </Link>
            </div>
            <div className="nav-right-part nav-right-part-mobile">
              <Link className="btn btn-base" to="/add-property">
                Submit
              </Link>
            </div>
            <div className="collapse navbar-collapse" id="dkt_main_menu">
              <ul className="navbar-nav menu-open text-center">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="property-grid">Property</Link>
                </li>
                <li className="menu-item-has-children current-menu-item">
                  <a href="#">Pages</a>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/team">Team</Link>
                    </li>
                    <li>
                      <Link to="/sign-in">Sign In</Link>
                    </li>
                    <li>
                      <Link to="/sign-up">Sign Up</Link>
                    </li>
                    <li>
                      <Link to="/add-property">Add Property</Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children current-menu-item">
                  <a href="#">Blog</a>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link to="/blog-details">Blog Details</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="nav-right-part nav-right-part-desktop">
              <ul>
                <li>
                  <a className="search" href="#">
                    <i className="fa fa-search" />
                  </a>
                </li>
                <li>
                  <Link className="btn btn-base" to="/add-property">
                    Submit <i className="fa fa-plus" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavbarV2;
