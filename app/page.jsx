import Image from "next/image";
import "./page.scss";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <section id="hero">
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="/img/PSA_Nitrogen_Gas_Plant.jpeg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <p>
                  GAZTRON ENGINEERING PRIVATE LIMITED WE ARE INDIA'S NO:1
                  MANUFACTURER OF HIGH QUALITY & ULTRA PURE ON-SITE PSA NITROGEN
                  GAS PLANTS
                </p>
                <h5>PSA Nitrogen Gas Plant</h5>

                <div className="cta-button">
                  <a href="#">Get In Touch</a>
                  <a href="#">Request Callback</a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="/img/PSA_Oxygen_Gas_Plant.jpeg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="/img/Industrial_Air_Dryer.jpeg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="/img/Ammonia_Cracker.jpeg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button> */}
        </div>
      </section>

      <section id="services">
        <div className="container-fluid">
          <div className="row service">
            <div className="col-sm-6 col-md-4 col-xl-2">
              <a className="icon-box" href="#">
                <Image
                  src="/img/psa-nitrogen-gas.svg"
                  width={84}
                  height={84}
                  alt="PSA Nitrogen Gas Generator Plant"
                />
                <h2>PSA Nitrogen Gas Generator Plant </h2>
                <Image
                  src="/img/gaztron-arrow.svg"
                  width={40}
                  height={40}
                  alt="arrow"
                />
              </a>
            </div>
            <div className="col-sm-6 col-md-4 col-xl-2">
              <a className="icon-box" href="#">
                <Image
                  src="/img/psa-oxygen-gas.svg"
                  width={84}
                  height={84}
                  alt="PSA Oxygen Gas Generator Plant"
                />
                <h2>PSA Oxygen Gas Generator Plant</h2>
                <Image
                  src="/img/gaztron-arrow.svg"
                  width={40}
                  height={40}
                  alt="arrow"
                />
              </a>
            </div>
            <div className="col-sm-6 col-md-4 col-xl-2">
              <a className="icon-box" href="#">
                <Image
                  src="/img/ammonia-cracker.svg"
                  width={84}
                  height={84}
                  alt="Ammonia Cracker 
                  & Purifier Unit"
                />
                <h2>Ammonia Cracker & Purifier Unit </h2>
                <Image
                  src="/img/gaztron-arrow.svg"
                  width={40}
                  height={40}
                  alt="arrow"
                />
              </a>
            </div>
            <div className="col-sm-6 col-md-4 col-xl-2">
              <a className="icon-box" href="#">
                <Image
                  src="/img/certificates.svg"
                  width={84}
                  height={84}
                  alt="Our Certificates"
                />
                <h2>Our Certificates </h2>
                <Image
                  src="/img/gaztron-arrow.svg"
                  width={40}
                  height={40}
                  alt="arrow"
                />
              </a>
            </div>
            <div className="col-sm-6 col-md-4 col-xl-2">
              <a className="icon-box" href="#">
                <Image
                  src="/img/projects.svg"
                  width={84}
                  height={84}
                  alt="Our Gas Projects"
                />
                <h2>Our Gas Projects</h2>
                <Image
                  src="/img/gaztron-arrow.svg"
                  width={40}
                  height={40}
                  alt="arrow"
                />
              </a>
            </div>
            <div className="col-sm-6 col-md-4 col-xl-2">
              <a className="icon-box" href="#">
                <Image
                  src="/img/blogs.svg"
                  width={84}
                  height={84}
                  alt="Our Blogs"
                />
                <h2>Our Blogs</h2>
                <Image
                  src="/img/gaztron-arrow.svg"
                  width={40}
                  height={40}
                  alt="arrow"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about-gaztron">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="content">
                <h2>
                  <span>Welcome to 👋🏻</span> Gaztron Engineering Private Limited
                </h2>
                <h3>(An ISO 9001-2015 Certified Co.)</h3>

                <p>
                  Gaztron Engineering Private Limited is India No:1 Manufacturer
                  of PSA Nitrogen Gas Plants.
                </p>
                <p>
                  Welcome to Gaztron. Gaztron is India's No:1 manufacturer of
                  high-quality On-Site PSA Nitrogen Gas Generator Plants. Our
                  technology-driven approach ensures that we provide our clients
                  with the highest quality custom-made solutions as well as
                  standard industrial solutions, at the lowest energy costs. Our
                  unwavering focus on research and development, coupled with a
                  certified quality assurance system, allows us to provide
                  unparalleled products and services to our clients across the
                  globe. Our commitment to eco-friendly and cost-efficient
                  solutions not only helps you succeed in your business but also
                  ensures a sustainable future for generations to come. Get in
                  touch with us today to explore how we can help you achieve
                  your gas-related goals with ease.
                </p>
                <a href="#">Get a Quote</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="nitrogen-gas">
        <div className="row">
          <div className="col-md-6">
            <div className="img-container">
              <Image
                className="top-dots"
                src="/img/dots.svg"
                width={63}
                height={67}
                alt="arrow"
              />
              <Image
                className="main-image"
                src="/img/On-Site_PSA_Nitrogen_Gas_Generator_Plant.jpeg"
                width={550}
                height={550}
                alt="arrow"
              />
              <Image
                className="bottom-dots"
                src="/img/dots.svg"
                width={63}
                height={67}
                alt="arrow"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="content">
              <h2>
                <span>01. </span> Efficient On-Site PSA
                <br /> Nitrogen Gas Generation Solutions
              </h2>
              <p>
                Gaztron Engineering Private Limited is India’s premier
                manufacturer of PSA Nitrogen Gas Generators, catering to diverse
                industries. Our top-tier PSA Nitrogen Gas Generators boast
                purity levels soaring up to 99.99%. Our high-purity models, such
                as Palladium-DX, achieve an impressive 99.999% purity, while our
                ultra-high purity variant, Copper-DX, attains an unparalleled
                99.99998% purity. Experience the pinnacle of nitrogen generation
                technology with Gaztron.
              </p>
              <ul>
                <li>
                  Gaztron offers a diverse range of Nitrogen Gas Generator
                  Plants spanning flow rates from 1 to 1000 nm3/hr. These
                  versatile systems provide variable purity levels, starting at
                  98% and reaching an impressive 99.9999%. Functionally
                  adaptable, our setups efficiently supply nitrogen within a
                  pressure range of 5 kg/cm2g to 200 kg/cm2, achieving
                  remarkably low dew points as low as (-) 80°C.
                </li>
                <li>
                  Gaztron's top-tier PSA Nitrogen Gas Generators excel in
                  diverse industrial applications. Inerting fuel tanks, furnace
                  blanketing, heat treatment, and fire prevention in Cement &
                  Coal industries showcase their versatility. Vital for
                  nitrogen-based food packaging, ensuring product freshness and
                  safety. Explore peak performance today!
                </li>
              </ul>
              <div className="btns">
                <a href="#" className="quote"></a>
                <a href="#" className="learn"></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
