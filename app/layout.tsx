import "../styles/globals.css";

import { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-serif",
  display: "swap",
});

const description =
  "Full stack developer from Oslo, Norway, building apps for iOS, Android and the web. Founder of Davoti Solutions.";

export const metadata: Metadata = {
  metadataBase: new URL("https://andordavoti.com"),
  title: {
    default: "Andor Davoti",
    template: "%s · Andor Davoti",
  },
  description,
  openGraph: {
    title: "Andor Davoti",
    description,
    url: "https://andordavoti.com",
    siteName: "Andor Davoti",
    images: ["/img/profile_img.jpg"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Andor Davoti",
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  colorScheme: "dark",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en" className={`${sans.variable} ${serif.variable}`}>
    <body>
      <div className="page-glow" aria-hidden />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <Analytics />
    </body>
  </html>
);

export default RootLayout;
