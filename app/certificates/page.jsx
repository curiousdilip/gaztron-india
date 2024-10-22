import Image from "next/image";
import "./certificates.scss"
import Navbar from "../components/Header";
import Footer from "../components/Footer";
import KeyProducts from "../components/KeyProducts";
import Quote from "../components/Quote";
import ContactBox from "../components/ContactBox";
export default function Certificates() {
    return (<>
        <Navbar />
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
            <KeyProducts />
            <Quote />
            <ContactBox />
        </section>

        <Footer />

    </>)
}