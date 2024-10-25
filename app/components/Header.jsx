"use client";
import "./header.scss";
import Image from "next/image";
import Link from "next/link";

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
          <Link className="contact-res" href="tel:+918447203393">
            +91-8447203393
          </Link>
        </div>
        <Link className="contact-res" href="/#">
          Get in touch with us. 🎉
        </Link>
        <div className="contact-info">
          <i className="bi bi-envelope"></i>
          <Link href="mailto:info@gaztron.in" className="contact-res">
            info@gaztron.in
          </Link>
        </div>
      </div>
      <nav className="navbar navbar-expand-xl navbar-light">
        <div className="container-fluid">
          <i></i>
          <Link className="navbar-brand" href="/">
            <Image src="/img/logo.svg" width={121} height={50} alt="logo" />
          </Link>
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
                <Link className="nav-link active" aria-current="page" href="/">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" href="/about">
                      Company Information
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/certificates">
                      Our Certificate
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/projects">
                      Our Projects
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Nitrogen Plant
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" href="#">
                      PSA Nitrogen Gas Generator Plant
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      PSA Nitrogen Gas Generator Plant DX Model
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      PSA Nitrogen Gas Generator Plant CUDX Model
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Oxygen Plant
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" href="#">
                      PSA Oxygen Gas Generator Plant for Medical Applications
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      On-Site PSA Oxygen Gas Plant for Industrial Applications
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      PSA Oxygen Gas Plant For Cylinder Filling - 7 Nm3/Hr - 25
                      Cylinder/Day
                    </Link>
                  </li>{" "}
                  <li>
                    <Link className="dropdown-item" href="#">
                      VPSA Oxygen Gas Generator
                    </Link>
                  </li>{" "}
                  <li>
                    <Link className="dropdown-item" href="#">
                      20 NM3/HR On-Site Oxygen Gas Generator
                    </Link>
                  </li>{" "}
                  <li>
                    <Link className="dropdown-item" href="#">
                      10 NM3/HR PSA Oxygen Gas Plant
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      30 NM3/HR Oxygen Gas Generator Plant
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Hydrogen Plant
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" href="#">
                      Ammonia cracking Purifier Unit
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Ammonia Cracker Unit{" "}
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/careers">
                  Careers
                </Link>
              </li>
            </ul>
            <Link className="cta-get" href={"/"}>
              Get In Touch
            </Link>
          </div>
        </div>
      </nav>
      <div className="bottom-border"></div>
    </header>
  );
}
