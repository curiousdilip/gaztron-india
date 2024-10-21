import Image from "next/image";
import Navbar from "../components/Header";
import "./about.scss";
import Footer from "../components/Footer";
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
              <h3>Efficient & Robust Perfomance</h3>
            </div>
            <div className="box">
              <Image
                src="/img/star.svg"
                width={112}
                height={112}
                alt="PSA Nitrogen Gas Generator Plant"
              />
              <h3>Efficient & Robust Perfomance</h3>
            </div> <div className="box">
              <Image
                src="/img/star.svg"
                width={112}
                height={112}
                alt="PSA Nitrogen Gas Generator Plant"
              />
              <h3>Efficient & Robust Perfomance</h3>
            </div> <div className="box">
              <Image
                src="/img/star.svg"
                width={112}
                height={112}
                alt="PSA Nitrogen Gas Generator Plant"
              />
              <h3>Efficient & Robust Perfomance</h3>
            </div> <div className="box">
              <Image
                src="/img/star.svg"
                width={112}
                height={112}
                alt="PSA Nitrogen Gas Generator Plant"
              />
              <h3>Efficient & Robust Perfomance</h3>
            </div> <div className="box">
              <Image
                src="/img/star.svg"
                width={112}
                height={112}
                alt="PSA Nitrogen Gas Generator Plant"
              />
              <h3>Efficient & Robust Perfomance</h3>
            </div> <div className="box">
              <Image
                src="/img/star.svg"
                width={112}
                height={112}
                alt="PSA Nitrogen Gas Generator Plant"
              />
              <h3>Efficient & Robust Perfomance</h3>
            </div> <div className="box">
              <Image
                src="/img/star.svg"
                width={112}
                height={112}
                alt="PSA Nitrogen Gas Generator Plant"
              />
              <h3>Efficient & Robust Perfomance</h3>
            </div> <div className="box">
              <Image
                src="/img/star.svg"
                width={112}
                height={112}
                alt="PSA Nitrogen Gas Generator Plant"
              />
              <h3>Efficient & Robust Perfomance</h3>
            </div> <div className="box">
              <Image
                src="/img/star.svg"
                width={112}
                height={112}
                alt="PSA Nitrogen Gas Generator Plant"
              />
              <h3>Efficient & Robust Perfomance</h3>
            </div> <div className="box">
              <Image
                src="/img/star.svg"
                width={112}
                height={112}
                alt="PSA Nitrogen Gas Generator Plant"
              />
              <h3>Efficient & Robust Perfomance</h3>
            </div> <div className="box">
              <Image
                src="/img/star.svg"
                width={112}
                height={112}
                alt="PSA Nitrogen Gas Generator Plant"
              />
              <h3>Efficient & Robust Perfomance</h3>
            </div>
          </div>
        </div>
        <div className="accomplishments">
        <Image
                src="/img/star.svg"
                width={112}
                height={112}
                alt="PSA Nitrogen Gas Generator Plant"
              />
              <h2>Accreditation Accomplishments</h2>
              <p>Our state-of-the-art manufacturing and office facility has achieved prestigious international certifications, solidifying our commitment to excellence and setting us apart from our competitors. We have successfully met the stringent compliance requirements of these certifications with flying colours, showcasing our unwavering dedication to quality and compliance.</p>
             
                <a href="#">View Certificates</a>
             
        </div>
        <div className="quote">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="quote-container">
                <h2>Request a quote.</h2>
                <h3>Just submit your details and we’ll be in touch shortly.</h3>
                <Image
                  src="/img/contact.svg"
                  width={559}
                  height={395}
                  alt="contact image"
                />
              </div>
            </div>
            <div className="col-md-6">
              <h4>I would like to discuss:</h4>
              <form action="#">
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option value="1">PSA Nitrogen Generator</option>
                  <option defaultValue="2">PSA Oxygen Generator</option>
                  <option value="3">Cryogenic Gas plants</option>
                  <option value="4">Ammonia Cracker</option>
                  <option value="5">Air dryers</option>
                </select>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Full Name *"
                />
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Mail *"
                />
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Phone Number *"
                />
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Your Message *"
                ></textarea>
                <div className="btns">
                  <button type="submit" className="btn btnsubmit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        </div>
        <div className="contact-us">
        <Image
                src="/img/star.svg"
                width={112}
                height={112}
                alt="PSA Nitrogen Gas Generator Plant"
              />
              <h2>Contact Us </h2>
              <p>Contact us today to learn more about how we can help you achieve your goals 🚀</p>
             
                <a href="#">Contact Us Now!</a>
        </div>
      </section>
      <Footer/>
    </>
  );
}
