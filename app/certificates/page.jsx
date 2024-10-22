import Image from "next/image";
import "./certificates.scss"
import Navbar from "../components/Header";
import Footer from "../components/Footer";
export default function Certificates() {
    return (<>
    <Navbar/>
        <section id="certificates-page">
            <div className="certificate-box">
                <Image
                    src="/img/about-us.png"
                    width={112}
                    height={112}
                    alt="PSA Nitrogen Gas Generator Plant"
                />
                <h2>Certifications & Standards</h2>
                <p>
                Our state-of-the-art manufacturing and office facility has achieved prestigious international certifications, solidifying our commitment to excellence and setting us apart from our competitors. We have successfully met the stringent compliance requirements of these certifications with flying colours, showcasing our unwavering dedication to quality and compliance.
                </p>
                <div className="item-container">
                    <div className="certificate">
                        <Image
                            src="/img/about-us.png"
                            width={216}
                            height={296}
                            alt="PSA Nitrogen Gas Generator Plant"
                        />
                        <h3>CE</h3>
                    </div>
                    <div className="certificate">
                        <Image
                            src="/img/about-us.png"
                            width={216}
                            height={296}
                            alt="PSA Nitrogen Gas Generator Plant"
                        />
                        <h3>CE</h3>
                    </div>  <div className="certificate">
                        <Image
                            src="/img/about-us.png"
                            width={216}
                            height={296}
                            alt="PSA Nitrogen Gas Generator Plant"
                        />
                        <h3>CE</h3>
                    </div>  <div className="certificate">
                        <Image
                            src="/img/about-us.png"
                            width={216}
                            height={296}
                            alt="PSA Nitrogen Gas Generator Plant"
                        />
                        <h3>CE</h3>
                    </div>  <div className="certificate">
                        <Image
                            src="/img/about-us.png"
                            width={216}
                            height={296}
                            alt="PSA Nitrogen Gas Generator Plant"
                        />
                        <h3>CE</h3>
                    </div>

                </div>
                <p>
                These certifications not only validate our manufacturing and office facility's excellence, but they also provide our customers with the assurance that our products and services are of the highest quality, meeting and exceeding international standards. Our commitment to compliance and continuous improvement sets us apart from our competitors, allowing us to deliver exceptional results and exceed our customers' expectations.
                </p>
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

    </>)
}