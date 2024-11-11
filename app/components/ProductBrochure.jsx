import Image from "next/image";
import "./product-brochure.scss";
export default function ProductBrochure() {
  return (
    <>
      <div className="product-brochure">
        <Image
          src="/img/contact-icon.png"
          width={112}
          height={112}
          alt="PSA Nitrogen Gas Generator Plant"
        />
        <h2>    Download Gaztron’s Product Brochure</h2>
    

        <a href="#">Download Now</a>
      </div>
    </>
  );
}
