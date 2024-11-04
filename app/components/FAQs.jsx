import Image from "next/image";
import "./faqs.scss";
export default function FAQ() {
  return (
    <>
      <div className="faq">
        <div className="row">
          <div className="col-md-6">
            <div className="faq-content">
              <h2>Frequently Asked Questions</h2>
              <h3>
                Have a question? Check out our frequently asked questions to
                find your answer.
              </h3>
              <Image
                src="/img/faq.svg"
                width={559}
                height={395}
                alt="trust icon"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
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
                    How do we obtain a quotation?
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Drop us an email with your inquiry at info@gaztron.in, and
                    we'll send you a quote.
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
                    Do you offer post-purchase services?
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Absolutely, we offer after-sales services to customers all
                    around the world.
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
                    What is the time frame for delivery?
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">Typically, 45 days.</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFour"
                    aria-expanded="false"
                    aria-controls="flush-collapseFour"
                  >
                    What is your primary manufacturing product?
                  </button>
                </h2>
                <div
                  id="flush-collapseFour"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    We manufacture the following types of gas plants:
                    <br />
                    <br />
                    1. PSA Nitrogen Gas Plants
                    <br />
                    2. Ammonia Cracker
                    <br />
                    3. Gas Storage Tanks
                    <br />
                    4. PSA Oxygen Gas Plants
                    <br />
                    5. Air Dryer
                    <br />
                    6. Cryo Plants.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFive"
                    aria-expanded="false"
                    aria-controls="flush-collapseFive"
                  >
                    Is Your Business International Quality Standard Certified?
                  </button>
                </h2>
                <div
                  id="flush-collapseFive"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Indeed, Gaztron India has received ISO 9001:2015
                    certification from TÜV Rheinland Germany.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseSix"
                    aria-expanded="false"
                    aria-controls="flush-collapseSix"
                  >
                    How do you handle product packaging?
                  </button>
                </h2>
                <div
                  id="flush-collapseSix"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    We pack equipment in accordance with international
                    standards.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseSeven"
                    aria-expanded="false"
                    aria-controls="flush-collapseSeven"
                  >
                    Has a statutory authority approved your manufacturing
                    facility?
                  </button>
                </h2>
                <div
                  id="flush-collapseSeven"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Yes, Gaztron has secured the necessary legal licenses, in
                    addition to the fact that this facility has NSIC approval.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
