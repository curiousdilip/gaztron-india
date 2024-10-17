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
                width={559}
                height={395}
                alt="contact image"
              />
            </div>
            <div className="col-md-9">
              <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4"></div>
                <div className="col-md-4"></div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
