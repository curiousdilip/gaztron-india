import Image from "next/image";
import Navbar from "../components/Header";
import "./about.scss";
import Footer from "../components/Footer";
import ContactBox from "../components/ContactBox";
import Quote from "../components/Quote";
import KeyProducts from "../components/KeyProducts";
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
        <KeyProducts />
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
                src="/img/efficiently.png"
                width={78}
                height={78}
                alt="Efficient & Robust Perfomance"
              />
              <h3>Efficient & Robust Perfomance</h3>
            </div>
            <div className="box">
              <Image
                src="/img/customization.png"
                width={78}
                height={78}
                alt="Customizability"
              />
              <h3>Customizability</h3>
            </div>{" "}
            <div className="box">
              <Image
                src="/img/reliability.png"
                width={78}
                height={78}
                alt="Reliability"
              />
              <h3>Reliability</h3>
            </div>{" "}
            <div className="box">
              <Image
                src="/img/simple-install.png"
                width={78}
                height={78}
                alt="Simple Installation"
              />
              <h3>Simple Installation</h3>
            </div>{" "}
            <div className="box">
              <Image
                src="/img/remote.png"
                width={78}
                height={78}
                alt="Remote Monitoring"
              />
              <h3>Remote Monitoring</h3>
            </div>{" "}
            <div className="box">
              <Image
                src="/img/high-profile.png"
                width={78}
                height={78}
                alt="High Profile Customers"
              />
              <h3>High Profile Customers</h3>
            </div>
            <div className="box">
              <Image
                src="/img/low-energy.png"
                width={78}
                height={78}
                alt="Lowest Energy Consumption"
              />
              <h3>Lowest Energy Consumption</h3>
            </div>
            <div className="box">
              <Image
                src="/img/highly-skilled-team.png"
                width={78}
                height={78}
                alt="Highly Skilled Technical Team"
              />
              <h3>Highly Skilled Technical Team</h3>
            </div>
            <div className="box">
              <Image
                src="/img/int-certified.png"
                width={78}
                height={78}
                alt="International Certification"
              />
              <h3>International Certification</h3>
            </div>
            <div className="box">
              <Image
                src="/img/after-sale-service.png"
                width={78}
                height={78}
                alt="After Sale Service"
              />
              <h3>After Sale Service</h3>
            </div>
            <div className="box">
              <Image
                src="/img/own-manufacturing.png"
                width={78}
                height={78}
                alt="Own Manufacturing Facility"
              />
              <h3>Own Manufacturing Facility</h3>
            </div>
            <div className="box">
              <Image
                src="/img/fully-automated.png"
                width={78}
                height={78}
                alt="Fully Automatic Plants"
              />
              <h3>Fully Automatic Plants</h3>
            </div>
          </div>
        </div>
        <div className="accomplishments">
          <Image
            src="/img/iso-symbol.png"
            width={112}
            height={112}
            alt="PSA Nitrogen Gas Generator Plant"
          />
          <h2>Accreditation Accomplishments</h2>
          <p>
            Our state-of-the-art manufacturing and office facility has achieved
            prestigious international certifications, solidifying our commitment
            to excellence and setting us apart from our competitors. We have
            successfully met the stringent compliance requirements of these
            certifications with flying colours, showcasing our unwavering
            dedication to quality and compliance.
          </p>

          <a href="#">View Certificates</a>
        </div>
        <Quote />
        <ContactBox />
      </section>
      <Footer />
    </>
  );
}
