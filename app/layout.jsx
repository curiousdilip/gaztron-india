import "./globals.scss";
import { Poppins } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import AddBootstrap from "./components/AddBootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

export const metadata = {
  title:
    "Gaztron Engineering, India's No:1 Manufacturer of On-Site PSA Nitrogen Gas Generation Plants",
  description:
    "Gaztron, India's premier manufacturer of PSA Nitrogen Gas Plants. Our cutting-edge technology ensures top-quality, efficient nitrogen gas production for diverse industrial needs. Trust Gaztron for innovative nitrogen solutions tailored to your requirements.",
    icons: {
      icon: "/img/favicon.svg",
    },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AddBootstrap />
        {children}
      </body>
    </html>
  );
}
