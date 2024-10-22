import Image from "next/image";
import "./quote.scss"
export default function Quote() {
    return (
        <>
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
        </>

    )
}