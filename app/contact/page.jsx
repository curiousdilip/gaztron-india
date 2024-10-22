import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Header";
import KeyProducts from "../components/KeyProducts";
import "./contact.scss"
import Quote from "../components/Quote";
export const metadata = {
    title: 'Contact Gaztron: Your Gateway to Premium Nitrogen Gas Generation Solutions',
    description: 'Welcome to the contact page.',
    openGraph: {
      title: 'Contact Gaztron: Your Gateway to Premium Nitrogen Gas Generation Solutions',
      description: 'Welcome to the contact page.',
      url: 'https://www.gaztronindia.com/contact',
    },
  };
export default function Contact() {
    return (
        <>
        
            <Navbar />
            <section id="contact-page">
                <div className="contact-box">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="title">
                                <h2>Contact Us </h2>
                                <h3>Reach out to us for gas-related solutions made easy</h3>
                                <Image
                                    src="/img/contact.svg"
                                    width={570}
                                    height={481}
                                    alt="contact image"
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="details">
                                <div className="box">
                                    <div className="title">
                                        <i class="bi bi-telephone-fill"> </i>  <h4>Phone Number</h4>
                                    </div>

                                    <p>+91-8447203393, 120-2397777, 120-2397778</p>
                                </div>
                                <div className="box">
                                    <div className="title">
                                        <i class="bi bi-telephone-fill"> </i>  <h4>Phone Number</h4>
                                    </div>

                                    <p>+91-8447203393, 120-2397777, 120-2397778</p>
                                </div>
                                <div className="box">
                                    <div className="title">
                                        <i class="bi bi-telephone-fill"> </i>  <h4>Phone Number</h4>
                                    </div>

                                    <p>+91-8447203393, 120-2397777, 120-2397778</p>
                                </div>
                                <div className="box">
                                    <div className="title">
                                        <i class="bi bi-telephone-fill"> </i>  <h4>Phone Number</h4>
                                    </div>

                                    <p>+91-8447203393, 120-2397777, 120-2397778</p>
                                </div>
                                <div className="box">
                                    <div className="title">
                                        <i class="bi bi-telephone-fill"> </i>  <h4>Phone Number</h4>
                                    </div>

                                    <p>+91-8447203393, 120-2397777, 120-2397778</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="map">
                    <Image
                        src="/img/shield.png"
                        width={112}
                        height={112}
                        alt="PSA Nitrogen Gas Generator Plant"
                    />
                    <h2>Find Us On Map</h2>
                    <iframe frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=gaztron+engineering&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
                </div>
                <KeyProducts/>
                <Quote/>
            </section>
            <Footer />
        </>
    )
}