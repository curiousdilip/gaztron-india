import Image from "next/image";
import "./contact-box.scss"
export default function ContactBox() {
    return(
        <>
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
        </>
    )
}