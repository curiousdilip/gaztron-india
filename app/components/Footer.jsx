import Image from "next/image";
import "./footer.scss";
export default function Footer() {
  return (
    <>
      <footer>
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
                <a href="#">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="#">
                  <i className="bi bi-twitter-x"></i>
                </a>
                <a href="#">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#">
                  <i className="bi bi-youtube"></i>
                </a>
                <a href="#">
                  <i className="bi bi-whatsapp"></i>
                </a>
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
                        <a href="#">PSA Nitrogen Generator Plant</a>
                      </li>
                      <li>
                        <a href="#">PSA Oxygen Generator Plant</a>
                      </li>
                      <li>
                        <a href="#">Hydrogen Generator</a>
                      </li>
                      <li>
                        <a href="#">Cryogenic ASU Gas Plants</a>
                      </li>
                      <li>
                        <a href="#">Air Dryer</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="footer-links">
                    <h2>Company</h2>
                    <ul>
                      <li>
                        <a href="#">About Us</a>
                      </li>
                      <li>
                        <a href="#">Careers</a>
                      </li>
                      <li>
                        <a href="#">Blogs</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="footer-links">
                    <h2>Support</h2>
                    <ul>
                      <li>
                        <a href="#">Contact Us</a>
                      </li>
                      <li>
                        <a href="#">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="#">Supply Policy</a>
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
                        <a>+91-8447203393</a>
                      </li>
                      <li>
                        <i className="bi bi-whatsapp"></i>
                        <a>8447203393</a>
                      </li>
                      <li>
                        <i className="bi bi-envelope-fill"></i>
                        <a>info@gaztron.in</a>
                      </li>
                      <li>
                        <i className="bi bi-geo-alt-fill"></i>
                        <a>
                          Industrial Plot No. - 179, Udyog Kendra - I, Ecotech-
                          III, Greater Noida - 201306
                        </a>
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
                        <a>+91-8447203393</a>
                      </li>
                      <li>
                        <i className="bi bi-whatsapp"></i>
                        <a>8447203393</a>
                      </li>
                      <li>
                        <i className="bi bi-envelope-fill"></i>
                        <a>info@gaztron.in</a>
                      </li>
                      <li>
                        <i className="bi bi-geo-alt-fill"></i>
                        <a>
                          Industrial Plot No. – A 341, Udyog Kendra – I,
                          Ecotech– III, Greater Noida – 201306
                        </a>
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
                        <a>+91-8447203393</a>
                      </li>
                      <li>
                        <i className="bi bi-whatsapp"></i>
                        <a>8447203393</a>
                      </li>
                      <li>
                        <i className="bi bi-envelope-fill"></i>
                        <a>info@gaztron.in</a>
                      </li>
                      <li>
                        <i className="bi bi-geo-alt-fill"></i>
                        <a>
                          Industrial Plot N0. - 85 YEIDA Sector-28 , Yamuna
                          Expressway, 203135
                        </a>
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
        <p>Copyright © 2023 - All right reserved. Made with ❤️ by Gaztron</p>
      </section>
    </>
  );
}
