import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Header";
import "./careers.scss";
export default function Careers() {
  return (
    <>
      <Navbar />
      <section id="career-page">
        <div className="career-box">
          <Image
            src="/img/about-us.png"
            width={112}
            height={112}
            alt="PSA Nitrogen Gas Generator Plant"
          />
          <h2 className="join">Join Us</h2>

          <Image
            className="main-image"
            src="/img/about-us.png"
            width={1240}
            height={681}
            alt="PSA Nitrogen Gas Generator Plant"
          />
          <div className="career-container">
            <h3 className="position">Open Positions</h3>
            <div className="accordion accordion-flush" id="careers">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    Graduate Engineer Trainee
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  data-bs-parent="#careers"
                >
                  <div className="accordion-body">
                    <p>
                      GAZTRON Engineering Pvt Ltd, India’s leading organization
                      in the field of Design, manufacturing, and Exporting
                      Nitrogen Gas Generator, is currently seeking a highly
                      motivated and talented Accounts Manager to join our team.
                      As an Accounts Manager, you will be responsible for
                      overseeing the financial activities of the company,
                      managing accounts receivable and payable, preparing
                      financial statements, and ensuring compliance with
                      financial regulations. Responsibilities: Manage and
                      oversee the daily operations of the accounts department,
                      including accounts receivable, accounts payable, and
                      general ledger. Prepare and analyze financial statements,
                      including profit and loss statements, balance sheets, and
                      cash flow statements. Ensure accurate and timely recording
                      of financial transactions, including invoicing, payments,
                      and receipts. Monitor and manage cash flow, including
                      forecasting and budgeting. Reconcile bank statements and
                      ensure accuracy of financial data. Develop and implement
                      financial policies, procedures, and internal controls to
                      safeguard company assets and ensure compliance with
                      accounting standards and regulations. Collaborate with
                      other departments to gather financial data and provide
                      insights and recommendations for improving financial
                      performance. Conduct periodic financial analysis and
                      reporting to identify areas of improvement and make
                      strategic recommendations to senior management. Coordinate
                      with external auditors during the annual audit process.
                      Stay updated on accounting standards, tax regulations, and
                      financial best practices to ensure compliance and drive
                      process improvements. Requirements: Proven work experience
                      as an Accounts Manager or in a similar role. Strong
                      knowledge of accounting principles, practices, and
                      regulations. Experience in financial analysis, budgeting,
                      and forecasting. Proficient in using accounting software
                      and MS Office applications. Excellent attention to detail
                      and accuracy. Strong analytical and problem-solving
                      skills. Ability to work independently and meet deadlines.
                      Excellent communication and interpersonal skills.
                      Bachelor's degree in Accounting, Finance, or a related
                      field. CPA or CMA certification is a plus. Previous
                      experience in the manufacturing or engineering industry is
                      preferred. Join our team as an Accounts Manager and
                      contribute to the financial success of GAZTRON Engineering
                      Pvt Ltd. Your expertise and dedication will play a crucial
                      role in our organization's growth and profitability.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    AutoCAD Mechanical Draughtsman
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#careers"
                >
                  <div className="accordion-body">
                    Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is
                    the second item's accordion body. Let's imagine this being
                    filled with some actual content.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    Management Trainee Sales
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#careers"
                >
                  <div className="accordion-body">
                    Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is
                    the third item's accordion body. Nothing more exciting
                    happening here in terms of content, but just filling up the
                    space to make it look, at least at first glance, a bit more
                    representative of how this would look in a real-world
                    application.
                  </div>
                </div>
              </div>
            </div>
            <h4>
              If you're excited about these positions, we'd love to hear from
              you! Please send your resume and details to either
              <a href="mailto:info@gaztron.in">info@gaztron.in </a>
              or &nbsp;
              <a href="gaztronengineering@gmail.com">
                gaztronengineering@gmail.com
              </a>
              . We can't wait to learn more about you and your interest in these
              roles!
            </h4>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
