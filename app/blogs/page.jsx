import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Header";
import KeyProducts from "../components/KeyProducts";
import ContactBox from "../components/ContactBox";
import Quote from "../components/Quote";
import "./blogs.scss"
import Subscription from "../components/Subscription";
export default function Blogs() {
  return (
    <>
      <Navbar />
      <section id="blogs-page">
        <div className="hero-image"></div>
        <div className="blogs">
          <Image
            src="/img/trust.svg"
            width={112}
            height={112}
            alt="trust icon"
          />
          <h2>Our Blogs</h2>
        
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
           
            
          </div>
          <h4>+ 💪🏻 And Many More</h4>
        </div>
        <Subscription/>
        <KeyProducts />
        <Quote />
        <ContactBox />
      </section>
      <Footer />
    </>
  );
}
