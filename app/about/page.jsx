import Image from "next/image";
import Navbar from "../components/Header";
import "./about.scss";
export default function About() {
  return (
    <>
      <Navbar />
      <section id="about-page">
        <div className="about-box">
          <h2>About Us</h2>
          <div className="item-container">
            <Image
              src="/img/about-us.png"
              width={1240}
              height={681}
              alt="PSA Nitrogen Gas Generator Plant"
            />
            <p>
              Welcome to Gaztron (An ISO 9001-2015 Certified Co.), We Are
              India’s Leading manufacturer of high-quality On-Site PSA Nitrogen
              & Oxygen Gas Generator Plants. Our technology-driven approach
              ensures that we provide our clients with the highest quality
              custom-made solutions as well as standard industrial solutions, at
              the lowest energy costs.
            </p>
            <p className="m-0">
              Our unwavering focus on research and development, coupled with a
              certified quality assurance system, allows us to provide
              unparalleled products and services to our clients across the
              globe. Our commitment to eco-friendly and cost-efficient solutions
              not only helps you succeed in your business but also ensures a
              sustainable future for generations to come.
            </p>
          </div>
        </div>
        <div className="key-products">
          <Image
            src="/img/shield.png"
            width={112}
            height={112}
            alt="PSA Nitrogen Gas Generator Plant"
          />
          <h2>Our Turn-Key Products </h2>
          <p>
            The demand for our Gas Generator Plants spans across different
            industries across the world. Our continuous focus on research and
            development has established us as industry leaders in the following
            domains:
          </p>
          <div className="products">
            <div className="product">
              <Image
                src="/img/shield.png"
                width={84}
                height={84}
                alt="PSA Nitrogen Gas Generator Plant"
              />
              <h3>PSA Nitrogen Generator Plant</h3>
              <div className="btns">
                <a href="#">Learn More</a>
                <a href="#">Request a Quote</a>
              </div>
            </div>
            <div className="product">
              <Image
                src="/img/shield.png"
                width={84}
                height={84}
                alt="PSA Nitrogen Gas Generator Plant"
              />
              <h3>PSA Nitrogen Generator Plant</h3>
              <div className="btns">
                <a href="#">Learn More</a>
                <a href="#">Request a Quote</a>
              </div>
            </div>
            <div className="product">
              <Image
                src="/img/shield.png"
                width={84}
                height={84}
                alt="PSA Nitrogen Gas Generator Plant"
              />
              <h3>PSA Nitrogen Generator Plant</h3>
              <div className="btns">
                <a href="#">Learn More</a>
                <a href="#">Request a Quote</a>
              </div>
            </div>
          </div>
        </div>
        <div className="difference">
          <Image
            src="/img/star.svg"
            width={112}
            height={112}
            alt="PSA Nitrogen Gas Generator Plant"
          />
          <h2>What Makes Gaztron Gas Generators Different</h2>
          <p>
            Utilizing the latest technologies and processes, Gaztron delivers
            highly efficient and reliable systems that not only meet the current
            needs of its customers, but also anticipate their future
            requirements. Gaztron's dedication to continuous improvement and
            innovation ensures that it stays at the forefront of the industry,
            offering cutting-edge solutions that set new standards for
            performance and reliability.
          </p>
          <div className="features">
            <div className="box">
              <Image
                src="/img/star.svg"
                width={112}
                height={112}
                alt="PSA Nitrogen Gas Generator Plant"
              />
            </div>
          </div>
        </div>
        <div className="accomplishments"></div>
        <div className="quote"></div>
        <div className="contact-us"></div>
      </section>
    </>
  );
}