"use client";
import Image from "next/image";
import ContactBox from "../components/ContactBox";
import Footer from "../components/Footer";
import Navbar from "../components/Header";
import KeyProducts from "../components/KeyProducts";
import Quote from "../components/Quote";
import "./projects.scss";
import React, { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
export default function Projects() {
  return (
    <>
      <Navbar />
      <section id="projects-page">
        <div className="hero-image"></div>
        <div className="clients">
          <div className="title">
            <Image
              src="/img/trust.svg"
              width={112}
              height={112}
              alt="trust icon"
            />
            <h2>Trusted By Brands Across The Globe</h2>
          </div>
          <Swiper
            slidesPerView={8}
            spaceBetween={80}
            pagination={{
              clickable: true,
            }}
            loop={true}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="client-slider"
          >
            <SwiperSlide>
              <Image
                className="img-fluid"
                src="/img/clients/hero.svg"
                width={153}
                height={198}
                alt="Hero"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="img-fluid"
                src="/img/clients/aditya-birla.svg"
                width={153}
                height={198}
                alt="Aditya birla"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="img-fluid"
                src="/img/clients/lg.svg"
                width={153}
                height={198}
                alt="lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="img-fluid"
                src="/img/clients/csir.svg"
                width={153}
                height={198}
                alt="csir"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="img-fluid"
                src="/img/clients/assa.svg"
                width={153}
                height={198}
                alt="assa"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="img-fluid"
                src="/img/clients/tata.svg"
                width={153}
                height={198}
                alt="tata"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="img-fluid"
                src="/img/clients/reliance.svg"
                width={153}
                height={198}
                alt="reliance"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="img-fluid"
                src="/img/clients/landt.svg"
                width={153}
                height={198}
                alt="L & T"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="img-fluid"
                src="/img/clients/haier.svg"
                width={153}
                height={198}
                alt="haier"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="img-fluid"
                src="/img/clients/samsung.svg"
                width={153}
                height={198}
                alt="samsung"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="img-fluid"
                src="/img/clients/lalitpurpower.svg"
                width={153}
                height={198}
                alt="lalit power generation company limited"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="img-fluid"
                src="/img/clients/fizz.svg"
                width={153}
                height={198}
                alt="fizz"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="img-fluid"
                src="/img/clients/bazazgroup.svg"
                width={153}
                height={198}
                alt="bazaz group"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="img-fluid"
                src="/img/clients/hycorr.svg"
                width={153}
                height={198}
                alt="hycorr"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="img-fluid"
                src="/img/clients/nellara.svg"
                width={153}
                height={198}
                alt="nellara"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="img-fluid"
                src="/img/clients/alok.svg"
                width={153}
                height={198}
                alt="alok"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="img-fluid"
                src="/img/clients/hindustanunilever.svg"
                width={153}
                height={198}
                alt="hindustan unilever"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="img-fluid"
                src="/img/clients/frooti.svg"
                width={153}
                height={198}
                alt="frooti"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="img-fluid"
                src="/img/clients/fizzappy.svg"
                width={153}
                height={198}
                alt="fizzappy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="img-fluid"
                src="/img/clients/nfl.svg"
                width={153}
                height={198}
                alt="nfl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="img-fluid"
                src="/img/clients/plogo.svg"
                width={153}
                height={198}
                alt="p"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="img-fluid"
                src="/img/clients/arctic.svg"
                width={153}
                height={198}
                alt="arctic"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="img-fluid"
                src="/img/clients/eil.svg"
                width={153}
                height={198}
                alt="eil"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="img-fluid"
                src="/img/clients/kribhco.svg"
                width={153}
                height={198}
                alt="kribhco"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="img-fluid"
                src="/img/clients/wildstone.svg"
                width={153}
                height={198}
                alt="wildstone"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="img-fluid"
                src="/img/clients/sail.svg"
                width={153}
                height={198}
                alt="sail"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="img-fluid"
                src="/img/clients/starion.svg"
                width={153}
                height={198}
                alt="starion"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="img-fluid"
                src="/img/clients/ester.svg"
                width={153}
                height={198}
                alt="ester"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="img-fluid"
                src="/img/clients/usha-martin.svg"
                width={153}
                height={198}
                alt="usha-martin"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="img-fluid"
                src="/img/clients/bajajenergy.svg"
                width={153}
                height={198}
                alt="bajaj energy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="img-fluid"
                src="/img/clients/rmc.svg"
                width={153}
                height={198}
                alt="rmc"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="img-fluid"
                src="/img/clients/pmcares.svg"
                width={153}
                height={198}
                alt="pmcares"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="img-fluid"
                src="/img/clients/apollo.svg"
                width={153}
                height={198}
                alt="apollo"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="img-fluid"
                src="/img/clients/whirlpool.svg"
                width={153}
                height={198}
                alt="whirlpool"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="projects">
          <Image
            src="/img/trust.svg"
            width={112}
            height={112}
            alt="trust icon"
          />
          <h2>Our Projects</h2>
          <p>
            Gaztron’s PSA Gas Generator Plants have found extensive usage in
            various industries worldwide, and our unwavering dedication to
            research and development has established us as frontrunners in the
            industry.
          </p>
          <div className="item-container">
            <div className="project">
              <Image
                src="/img/trust.svg"
                width={112}
                height={112}
                alt="trust icon"
              />

              <h3>
                Gaztron’s PSA Nitrogen Generator Plant for Relaince Industries
              </h3>
            </div>
            <div className="project">
              <Image
                src="/img/trust.svg"
                width={112}
                height={112}
                alt="trust icon"
              />

              <h3>
                Gaztron’s PSA Nitrogen Generator Plant for Relaince Industries
              </h3>
            </div>
            <div className="project">
              <Image
                src="/img/trust.svg"
                width={112}
                height={112}
                alt="trust icon"
              />

              <h3>
                Gaztron’s PSA Nitrogen Generator Plant for Relaince Industries
              </h3>
            </div>{" "}
            <div className="project">
              <Image
                src="/img/trust.svg"
                width={112}
                height={112}
                alt="trust icon"
              />

              <h3>
                Gaztron’s PSA Nitrogen Generator Plant for Relaince Industries
              </h3>
            </div>{" "}
            <div className="project">
              <Image
                src="/img/trust.svg"
                width={112}
                height={112}
                alt="trust icon"
              />

              <h3>
                Gaztron’s PSA Nitrogen Generator Plant for Relaince Industries
              </h3>
            </div>{" "}
            <div className="project">
              <Image
                src="/img/trust.svg"
                width={112}
                height={112}
                alt="trust icon"
              />

              <h3>
                Gaztron’s PSA Nitrogen Generator Plant for Relaince Industries
              </h3>
            </div>{" "}
            <div className="project">
              <Image
                src="/img/trust.svg"
                width={112}
                height={112}
                alt="trust icon"
              />

              <h3>
                Gaztron’s PSA Nitrogen Generator Plant for Relaince Industries
              </h3>
            </div>{" "}
            <div className="project">
              <Image
                src="/img/trust.svg"
                width={112}
                height={112}
                alt="trust icon"
              />

              <h3>
                Gaztron’s PSA Nitrogen Generator Plant for Relaince Industries
              </h3>
            </div>{" "}
            <div className="project">
              <Image
                src="/img/trust.svg"
                width={112}
                height={112}
                alt="trust icon"
              />

              <h3>
                Gaztron’s PSA Nitrogen Generator Plant for Relaince Industries
              </h3>
            </div>{" "}
            <div className="project">
              <Image
                src="/img/trust.svg"
                width={112}
                height={112}
                alt="trust icon"
              />

              <h3>
                Gaztron’s PSA Nitrogen Generator Plant for Relaince Industries
              </h3>
            </div>{" "}
            <div className="project">
              <Image
                src="/img/trust.svg"
                width={112}
                height={112}
                alt="trust icon"
              />

              <h3>
                Gaztron’s PSA Nitrogen Generator Plant for Relaince Industries
              </h3>
            </div>{" "}
            <div className="project">
              <Image
                src="/img/trust.svg"
                width={112}
                height={112}
                alt="trust icon"
              />

              <h3>
                Gaztron’s PSA Nitrogen Generator Plant for Relaince Industries
              </h3>
            </div>{" "}
            <div className="project">
              <Image
                src="/img/trust.svg"
                width={112}
                height={112}
                alt="trust icon"
              />

              <h3>
                Gaztron’s PSA Nitrogen Generator Plant for Relaince Industries
              </h3>
            </div>{" "}
            <div className="project">
              <Image
                src="/img/trust.svg"
                width={112}
                height={112}
                alt="trust icon"
              />

              <h3>
                Gaztron’s PSA Nitrogen Generator Plant for Relaince Industries
              </h3>
            </div>
          </div>
          <h4>+ 💪🏻 And Many More</h4>
        </div>
        <KeyProducts />
        <Quote />
        <ContactBox />
      </section>
      <Footer />
    </>
  );
}
