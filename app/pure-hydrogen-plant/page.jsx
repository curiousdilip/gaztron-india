import Image from "next/image";
import ContactBox from "../components/ContactBox";
import Footer from "../components/Footer";
import Navbar from "../components/Header";
import Quote from "../components/Quote";
import "./pure-hydrogen-plant.scss";
import FAQ from "../components/FAQs";
export default function AmmoniaCracker() {
  return (
    <>
      <Navbar />
      <section id="pure-hydrogen-plant">
        <div className="hydrogen-plant-box">
          <h2>Gaztron’s Pure Hydrogen Plant (Water Electrolysis)</h2>
          <div className="item-container">
            <Image
              src="/img/about-us.png"
              width={1240}
              height={681}
              alt="PSA Nitrogen Gas Generator Plant"
            />

            <h3>Gaztron’s Water Electrolysis Technology</h3>
            <p>
              Our high-pressure bipolar water electrolysis technology offers a
              simple and rapid means of producing hydrogen, utilizing only power
              and deionized water. Our product line includes systems capable of
              producing hydrogen at rates ranging from 0.25 Nm3/hr up to 500
              Nm3/hr for a single electrolyzer. For higher production
              capacities, multiple electrolyzers can be connected to common
              subsystems.
            </p>

            <h3>Gaztron’s Water Electrolysis Technology</h3>
            <p>
              Gaztron's water electrolysis hydrogen plant offers several
              features and benefits, which include:
            </p>
            <ul>
              <li>
                Bipolar systems are skid mounted, while PEM generators are
                constructed with panels from Proton NEL.
              </li>
              <li>
                Installation is easy, with the system typically handed over
                within a week.
              </li>
              <li>PLC control enables fully automatic operation. </li>
              <li>
                The system can be designed for load following or tank filling
                mode.
              </li>
              <li>Efficient power usage keeps the cost of production low.</li>
              <li>
                High standards of instrumentation and adherence to Hydrogen
                safety codes.
              </li>
              <li>
                Add-ons such as a booster compressor allow for high pressures up
                to 700 bar(g).
              </li>
              <li>
                Built to withstand Indian climatic conditions, Gaztron's
                Hydrogen Gas Generator is a reliable choice.
              </li>
            </ul>
          </div>
        </div>
        <div className="working">
          <h2>How it Works?</h2>
          <div className="item-container">
            <Image
              src="/img/about-us.png"
              width={1240}
              height={681}
              alt="PSA Nitrogen Gas Generator Plant"
            />
            <h3>Bipolar Technology – Using Alkaline electrolyte</h3>
            <p>
              Our Electrolyzer features a Bipolar design, in which high purity
              DM water is split into H2 and O2 using DC power from a rectifier.
              Hydrogen is generated at the cathode side of the cells, while
              oxygen is produced at the anode side. This unique design results
              in a compact Electrolyzer unit that can produce gases at high
              pressure (15 Bar) directly, eliminating the need for a separate
              Hydrogen compressor for medium pressure Hydrogen requirements.
            </p>

            <Image
              src="/img/about-us.png"
              width={1240}
              height={681}
              alt="PSA Nitrogen Gas Generator Plant"
            />
            <h3>Proton Exchange Membrane (PEM)</h3>
            <p className="m-0">
              The electrolyzer utilizes proton exchange membrane (PEM)
              technology, generating Hydrogen gas at the cathode at
              customer-preferred pressures, while oxygen gas is produced at the
              anode at pressures near ambient. The membrane's high bubble point
              ensures that oxygen does not mix with the hydrogen stream,
              ensuring safe and simple operation with a full differential
              pressure design.
            </p>
          </div>
        </div>

        <div className="specifications">
          <h2>Technical Specifications of Our Hydrogen Generator Models</h2>
          <div className="details">
            <p>
              Our Hydrogen Generator is an inventive solution for producing pure
              hydrogen that is cost-effective. It employs advanced engineering
              and an efficient design to provide hydrogen at a much lower cost
              than other options, which helps to optimize your production
              process.
            </p>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Technical Specification</th>
                  <th scope="col">GAZ-NPH</th>
                  <th scope="col">GAZ-NPS</th>
                  <th scope="col">GAZ-NPMC</th>
                  <th scope="col">GAZ-NPC</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Hydrogen production</th>
                  <td>2 to 6 Nm3/hr</td>
                  <td>0.25 to 1 Nm3/hr</td>
                  <td>10 to 30 Nm3/hr</td>
                  <td>250 or 500 Nm3/hr</td>
                </tr>
                <tr>
                  <th scope="row">Hydrogen purity</th>
                  <td>99.9995% H2</td>
                  <td>99.9995% H2</td>
                  <td>99.9998% H2</td>
                  <td>99.95% - 99.9995% H2</td>
                </tr>
                <tr>
                  <th scope="row">Hydrogen dew point</th>
                  <td>-65°C</td>
                  <td>-65°C</td>
                  <td>-72°C</td>
                  <td>H2O &lt; 5 ppm</td>
                </tr>
                <tr>
                  <th scope="row">Hydrogen delivery pressure</th>
                  <td>15 Bar or 30 Bar</td>
                  <td>15 Bar</td>
                  <td>30 Bar</td>
                  <td>30 Bar</td>
                </tr>
                <tr>
                  <th scope="row">Oxygen</th>
                  <td>Recovery not possible</td>
                  <td>Recovery not possible</td>
                  <td>Recovery not possible</td>
                  <td>Recovery not possible</td>
                </tr>
                <tr>
                  <th scope="row">Electrolyte</th>
                  <td>PEM</td>
                  <td>PEM</td>
                  <td>PEM</td>
                  <td>PEM</td>
                </tr>
                <tr>
                  <th scope="row">Power requirement</th>
                  <td>6.8 - 7.3 kw/Nm3-H2</td>
                  <td>6.7 kw/Nm3-H2</td>
                  <td>5.8 – 6.2 kw/Nm3-H2</td>
                  <td>1.25 MW or 2.5 MW</td>
                </tr>
                <tr>
                  <th scope="row">Utilities required from customer</th>
                  <td>Power, Deionized & Cooling Water</td>
                  <td>Power, Deionized Water</td>
                  <td>Power, Deionized & Cooling Water</td>
                  <td>Power, Deionized & Cooling Water</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="technology">
          <h2>Gaztron’s Hydrocarbon – Reforming Technology</h2>
          <div className="item-container">
            <Image
              src="/img/about-us.png"
              width={1240}
              height={681}
              alt="PSA Nitrogen Gas Generator Plant"
            />
            <p>
              The attainment of high-purity hydrogen, reaching levels up to
              99.9999%, constitutes an imperative requirement across diverse
              industries. With the support of our esteemed European partners,
              who boast a portfolio of over 80 successfully commissioned
              hydrogen production facilities globally, we stand in a formidable
              position to offer bespoke, economical, and validated solutions for
              the establishment of hydrogen generation plants that cater to a
              range of hydrocarbon feedstocks, including natural gas, LPG,
              naphtha, and methanol.
            </p>
            <h3>Gaztron’s Steam Reformer – Natural Gas / LPG / Naphtha</h3>
            <p>
              Our advanced production process for high purity hydrogen involves
              the steam reforming of hydrocarbons, followed by a PSA
              purification step. The feedstock is preheated by mixing it with a
              split stream of hydrogen and passing it through a sulfur removal
              process. It is then combined with superheated steam and passed
              through catalyst-filled reformer tubes, where it is converted into
              a syngas containing H2, CO, CO2, H2O, and CH4.
            </p>

            <p>
              The hot syngas is then cooled through a heat exchanger, which
              recovers a significant amount of its sensible heat, before being
              passed through the CO-shift stage. The syngas is further cooled to
              ambient temperatures, resulting in the condensation and subsequent
              separation of water vapor. Finally, the purified hydrogen is
              isolated to the desired level of purity using a molecular sieve
              PSA purification unit.
            </p>

            <p>
              The reformer is fired by a high-velocity burner that consumes both
              fuel and tail gas. Any tail gas produced during the PSA
              purification stage is buffered in the tail gas buffer tank. The
              hot flue gases generated by the reformer are directed towards a
              waste heat boiler, which is used to superheat the feed/steam
              mixture and preheat the feed in the heat exchangers.
            </p>

            <h3>Gaztron’s Steam Reformer – Methanol Reforming</h3>
            <p>
              The production of high purity hydrogen involves a two-stage
              process of methanol reforming and PSA purification. Initially, a
              mixture of methanol and deionized water is vaporized in heat
              exchangers and directed to a heated catalyst reactor, which
              transforms the methanol/water vapor into a syngas containing
              hydrogen, carbon monoxide, carbon dioxide, methane, and water
              vapor. This syngas is subsequently cooled in a heat exchanger,
              with the water vapor condensed and recycled to the storage tank.
              The cooled syngas is then fed to the PSA purification unit, which
              utilizes a molecular sieve to isolate the hydrogen to the desired
              purity. The tail gas from the PSA purification unit is sent to the
              buffer tank and used as fuel for the required process heat.
            </p>
            <p>
              The process heat can be supplied either by utilizing our
              Principal's distinctive circulation of hot inert gas or by using a
              thermal oil system. By using the circulation of inert gas instead
              of thermal oil as the heat transfer fluid for heating, the
              reformer renders a thermal oil system obsolete and avoids all
              associated expenses and issues related to handling thermal oil.
            </p>

            <p className="m-0">
              In scenarios where thermal oil is already accessible or for large
              MeOH-based reforming plants (exceeding approximately 2000 Nm³/h
              H2), a thermal oil heated plant may be more feasible. This is
              because the physical equipment size of the circulated inert
              gas-based plant increases disproportionally.
            </p>
          </div>
        </div>

        <div className="reform-specifications">
          <h2>
            Technical Specifications of Our Hydrocarbon – Reforming Models
          </h2>
          <div className="details">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Technical Specification</th>
                  <th scope="col">Steam Methane Reformer</th>
                  <th scope="col">Methanol Reforming</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Feedstock</th>
                  <td>Natural Gas (Methane), LPG, Naphtha</td>
                  <td>Methanol (e.g. British Standard BS 506)</td>
                </tr>
                <tr>
                  <th scope="row">Capacity Range</th>
                  <td>200 – 6,500 Nm3/hr single reformer</td>
                  <td>200 – 5,000+ Nm3/hr</td>
                </tr>
                <tr>
                  <th scope="row">Hydrogen purity</th>
                  <td>99.999% by vol</td>
                  <td>99.999% by vol</td>
                </tr>
                <tr>
                  <th scope="row">Hydrogen delivery pressure</th>
                  <td>15 Bar</td>
                  <td>15 Bar</td>
                </tr>
                <tr>
                  <th scope="row">Operation</th>
                  <td>Automatic, PLC Controlled</td>
                  <td>Automatic, PLC Controlled</td>
                </tr>
                <tr>
                  <th scope="row">By-product</th>
                  <td>Export steam</td>
                  <td>Export steam</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="application">
          <Image
            src="/img/about-us.png"
            width={112}
            height={112}
            alt="PSA Nitrogen Gas Generator Plant"
          />
          <h2>Gaztron’s Pure Hydrogen Applications</h2>
          <p>
            Our steadfast commitment to research and development has established
            us as pioneers in the field of pure hydrogen technologies, with
            widespread applications in various industries globally. By
            continuously emphasizing innovation, we have secured our position as
            industry leaders in meeting the diverse demands for hydrogen in
            various industrial sectors.
          </p>
          <div className="item-container">
            <div className="box">
              <Image
                src="/img/about-us.png"
                width={396}
                height={211}
                alt="PSA Nitrogen Gas Generator Plant"
              />
              <h3>Heat Treatment Furnaces</h3>
            </div>
            <div className="box">
              <Image
                src="/img/about-us.png"
                width={396}
                height={211}
                alt="PSA Nitrogen Gas Generator Plant"
              />
              <h3>Heat Treatment Furnaces</h3>
            </div>
            <div className="box">
              <Image
                src="/img/about-us.png"
                width={396}
                height={211}
                alt="PSA Nitrogen Gas Generator Plant"
              />
              <h3>Heat Treatment Furnaces</h3>
            </div>
            <div className="box">
              <Image
                src="/img/about-us.png"
                width={396}
                height={211}
                alt="PSA Nitrogen Gas Generator Plant"
              />
              <h3>Heat Treatment Furnaces</h3>
            </div>
            <div className="box">
              <Image
                src="/img/about-us.png"
                width={396}
                height={211}
                alt="PSA Nitrogen Gas Generator Plant"
              />
              <h3>Heat Treatment Furnaces</h3>
            </div>
            <div className="box">
              <Image
                src="/img/about-us.png"
                width={396}
                height={211}
                alt="PSA Nitrogen Gas Generator Plant"
              />
              <h3>Heat Treatment Furnaces</h3>
            </div>
          </div>
        </div>

        <FAQ />
        <Quote />
        <ContactBox />
      </section>
      <Footer />
    </>
  );
}
