import Image from "next/image";
import "./footer.scss";
import Link from "next/link";
export default function Footer() {
  return (
    <>
      <footer>
        <div className="arrow-up">
          <Link href="/">
            <Image
              src="/img/footer-arrow-up.svg"
              width={116}
              height={116}
              alt="footer arrow up"
            />
          </Link>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <Image
                src="/img/white-logo.svg"
                width={221}
                height={92}
                alt="footer logo"
              />
              <p>
                Empowering industries with cutting-edge technological solutions
                and unwavering commitment to excellence, to enhance productivity
                and drive success.
              </p>
              <div className="social">
                <Link
                  href="https://www.linkedin.com/company/gaztron-engineering-private-limited/"
                  target="_blank"
                >
                  <i className="bi bi-linkedin"></i>
                </Link>
                <Link href="https://twitter.com/GaztronIndia" target="_blank">
                  <i className="bi bi-twitter-x"></i>
                </Link>
                <Link
                  href="https://www.facebook.com/GaztronEngineering/"
                  target="_blank"
                >
                  <i className="bi bi-facebook"></i>
                </Link>
                <Link
                  href="https://www.instagram.com/gaztronindia/"
                  target="_blank"
                >
                  <i className="bi bi-instagram"></i>
                </Link>
                <Link
                  href="https://www.youtube.com/@gaztronengineeringpvtltd-n7856"
                  target="_blank"
                >
                  <i className="bi bi-youtube"></i>
                </Link>
                <Link
                  href="https://api.whatsapp.com/send?phone=8447203393"
                  target="_blank"
                >
                  <i className="bi bi-whatsapp"></i>
                </Link>
              </div>

              <p>Select Language</p>
            </div>
            <div className="col-md-9">
              <div className="row">
                <div className="col-md-4">
                  <div className="footer-links">
                    <h2>Products</h2>
                    <ul>
                      <li>
                        <Link href="/">PSA Nitrogen Generator Plant</Link>
                      </li>
                      <li>
                        <Link href="/">PSA Oxygen Generator Plant</Link>
                      </li>
                      <li>
                        <Link href="/">Hydrogen Generator</Link>
                      </li>
                      <li>
                        <Link href="/">Cryogenic ASU Gas Plants</Link>
                      </li>
                      <li>
                        <Link href="/">Air Dryer</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="footer-links">
                    <h2>Company</h2>
                    <ul>
                      <li>
                        <Link href="/about">About Us</Link>
                      </li>
                      <li>
                        <Link href="/careers">Careers</Link>
                      </li>
                      <li>
                        <Link href="/blogs">Blogs</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="footer-links">
                    <h2>Support</h2>
                    <ul>
                      <li>
                        <Link href="/contact">Contact Us</Link>
                      </li>
                      <li>
                        <Link href="/privacy-policy">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link href="/supply-policy">Supply Policy</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row second-line">
                <div className="col-md-4">
                  <div className="contact-info">
                    <h2>Gaztron Headquarter</h2>
                    <ul>
                      <li>
                        <i className="bi bi-telephone-fill"></i>
                        <Link href="/">+91-8447203393</Link>
                      </li>
                      <li>
                        <i className="bi bi-whatsapp"></i>
                        <Link href="/">8447203393</Link>
                      </li>
                      <li>
                        <i className="bi bi-envelope-fill"></i>
                        <Link href="/">info@gaztron.in</Link>
                      </li>
                      <li>
                        <i className="bi bi-geo-alt-fill"></i>
                        <Link href="/">
                          Industrial Plot No. - 179, Udyog Kendra - I, Ecotech-
                          III, Greater Noida - 201306
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="contact-info">
                    <h2>Manufacturing Unit 2</h2>
                    <ul>
                      <li>
                        <i className="bi bi-telephone-fill"></i>
                        <Link href="/">+91-8447203393</Link>
                      </li>
                      <li>
                        <i className="bi bi-whatsapp"></i>
                        <Link href="/">8447203393</Link>
                      </li>
                      <li>
                        <i className="bi bi-envelope-fill"></i>
                        <Link href="/">info@gaztron.in</Link>
                      </li>
                      <li>
                        <i className="bi bi-geo-alt-fill"></i>
                        <Link href="/">
                          Industrial Plot No. – A 341, Udyog Kendra – I,
                          Ecotech– III, Greater Noida – 201306
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="contact-info">
                    <h2>Gaztron Headquarter</h2>
                    <ul>
                      <li>
                        <i className="bi bi-telephone-fill"></i>
                        <Link href="/">+91-8447203393</Link>
                      </li>
                      <li>
                        <i className="bi bi-whatsapp"></i>
                        <Link href="/">8447203393</Link>
                      </li>
                      <li>
                        <i className="bi bi-envelope-fill"></i>
                        <Link href="/">info@gaztron.in</Link>
                      </li>
                      <li>
                        <i className="bi bi-geo-alt-fill"></i>
                        <Link href="/">
                          Industrial Plot N0. - 85 YEIDA Sector-28 , Yamuna
                          Expressway, 203135
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <section id="copyright">
        <p>
          Copyright © 2023 - All right reserved. Designed by Gaztron & Developed
          by Dilip
        </p>
      </section>
    </>
  );
}
