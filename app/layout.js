import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AWS Club MLRITM | Empowering Students With Cloud Innovation",
  description: "Join the AWS Club at MLRITM. We empower students with cloud innovation through workshops, certification support, and technical meetups.",
  keywords: "AWS, Cloud, MLRITM, Students, Cloud Computing",
  authors: [{ name: "AWS Club MLRITM" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
