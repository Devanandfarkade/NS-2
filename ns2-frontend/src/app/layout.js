import { Poppins, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-poppins",
});
const opensans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-opensans",
});

export const metadata = {
  title: "NS^2",
  description: "Next.js Project with Dynamic Navbar & Footer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${opensans.variable}`}>
      <body className="font-opensans flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
