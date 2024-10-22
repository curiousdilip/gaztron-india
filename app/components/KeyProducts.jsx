
import Image from "next/image"
import "./keyproducts.scss"
export default function KeyProducts() {
    return (
        <>
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
            </div></>
    )
}