import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "../styles/globals.css";

import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import ThemeRegistry from "../lib/ThemeRegistry";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Andor Davoti",
  description: "I am a full stack developer from Oslo, Norway.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry options={{ key: "mui" }}>
          <Navbar />
          {children}
          <Analytics />
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
