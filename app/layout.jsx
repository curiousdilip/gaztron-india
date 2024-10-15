import localFont from "next/font/local";
import "./globals.scss";


export const metadata = {
  title: "Gaztron Engineering, India's No:1 Manufacturer of On-Site PSA Nitrogen Gas Generation Plants",
  description: "Gaztron, India's premier manufacturer of PSA Nitrogen Gas Plants. Our cutting-edge technology ensures top-quality, efficient nitrogen gas production for diverse industrial needs. Trust Gaztron for innovative nitrogen solutions tailored to your requirements.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
