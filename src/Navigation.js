import React from "react";
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import header from "../.../../src/images/header.png";
import faAppointment from "../.../../src/images/icons/appointment.svg";
import faDokter from "../.../../src/images/icons/doctor.svg";
import faHome from "../.../../src/images/icons/hospital.svg";
import "./Nav.css";
import { Button } from "react-bootstrap";

const tabs = [
  {
    route: "/home",
    icon: faHome,
    label: "Home",
  },
  {
    route: "/appMobile",
    icon: faAppointment,
    label: "App",
  },
  {
    route: "/video",
    icon: faDokter,
    label: "Video",
  },
];

const Navigation = (props) => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-md navbar-light d-none d-lg-block sticky-top"
        role="navigation"
      >
        <div className="container-fluid">
            <a class="navbar-brand" href="/home">
              <img src={header} alt="" className="" />
            </a>
          <Nav className="ml-auto">
            <NavItem>
              <NavLink to="/home" className="nav-link">
                Beranda
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/appMobile" className="nav-link">
                App
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/video" className="nav-link">
                Video
              </NavLink>
            </NavItem>
          </Nav>
        </div>
      </nav>
      <div>
        <div class="container">
          <div class="col-md-12 mt-3 text-center justify-content-center align-self-center h-100">
            <img src={header} alt="" className="center d-lg-none" />
          </div>
        </div>

        <div
          className="fixed-bottom d-lg-none text-right mb-5"
          role="navigation"
        >
          <div className="mb-5">
            <a href="https://wa.me/+62895600394345">
              <Button size="md" className="d-lg-none">
                Chat Admin
              </Button>
            </a>
          </div>
        </div>

        <nav
          className="nav navbar fixed-bottom bg-white d-block d-lg-none bottom-tab-nav"
          role="navigation"
        >
          <Nav className="w-100">
            <div className=" d-flex flex-row justify-content-around w-100">
              {tabs.map((tab, index) => (
                <NavItem key={`tab-${index}`}>
                  <NavLink
                    to={tab.route}
                    className="nav-link bottom-nav-link"
                    activeClassName="active"
                  >
                    <div className="row d-flex flex-column justify-content-center align-items-center">
                      <img src={tab.icon} alt="" className="iconTab" />
                      <div className="bottom-tab-label">{tab.label}</div>
                    </div>
                  </NavLink>
                </NavItem>
              ))}
            </div>
          </Nav>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
