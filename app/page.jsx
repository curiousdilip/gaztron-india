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
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/img/PSA_Nitrogen_Gas_Plant.jpeg" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
              <p>GAZTRON ENGINEERING PRIVATE LIMITED WE ARE INDIA'S NO:1 MANUFACTURER OF HIGH QUALITY & ULTRA PURE ON-SITE PSA NITROGEN GAS PLANTS
              </p>
                <h5>PSA Nitrogen Gas Plant
                </h5>
             
                <div className="cta-button">
                  <a href="#">Get In Touch</a>
                  <a href="#">Request Callback</a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img src="/img/PSA_Oxygen_Gas_Plant.jpeg" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="/img/Industrial_Air_Dryer.jpeg" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="/img/Ammonia_Cracker.jpeg" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
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
    </>
  );
}
