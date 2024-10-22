import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Header";
import "./contact.scss"
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
            </section>
            <Footer />
        </>
    )
}