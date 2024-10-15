"use client";
import "./header.scss";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      setScrolled(window.scrollY > 10);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`fixed-top ${scrolled ? "scrolled" : ""}`}>
      <div className="contact-bar">
        <div className="contact-info">
          <i className="bi bi-phone"></i>
          <a className="contact-res" href="tel:+918447203393">
            +91-8447203393
          </a>
        </div>
        <a className="contact-res" href="#contact">
          Get in touch with us. 🎉
        </a>
        <div className="contact-info">
          <i className="bi bi-envelope"></i>
          <a href="mailto:info@gaztron.in" className="contact-res">
            info@gaztron.in
          </a>
        </div>
      </div>
      <nav className="navbar navbar-expand-xl navbar-light">
        <div className="container-fluid">
          <i></i>
          <a className="navbar-brand" href="#">
            <Image src="/img/logo.svg" width={121} height={50} alt="logo" />
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                    Company Information
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    Our Certificate
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Nitrogen Plant
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                    
                    PSA Nitrogen Gas Generator Plant
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    PSA Nitrogen Gas Generator Plant DX Model
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    PSA Nitrogen Gas Generator Plant CUDX Model
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Oxygen Plant
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                    PSA Oxygen Gas Generator Plant for Medical Applications
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    On-Site PSA Oxygen Gas Plant for Industrial Applications
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    PSA Oxygen Gas Plant For Cylinder Filling - 7 Nm3/Hr - 25 Cylinder/Day
                    </a>
                  </li> <li>
                    <a className="dropdown-item" href="#">
                    VPSA Oxygen Gas Generator
                    </a>
                  </li> <li>
                    <a className="dropdown-item" href="#">
                    20 NM3/HR On-Site Oxygen Gas Generator
                    </a>
                  </li> <li>
                    <a className="dropdown-item" href="#">
                    10 NM3/HR PSA Oxygen Gas Plant
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    30 NM3/HR Oxygen Gas Generator Plant
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Hydrogen Plant
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                    Ammonia cracking Purifier Unit
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    Ammonia Cracker Unit                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Careers
                </a>
              </li>
            </ul>
            <a className="cta-get">Get In Touch</a>
          </div>
        </div>
      </nav>
      <div className="bottom-border"></div>
    </header>
  );
}
