import { Poppins, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-poppins",
});
const opensans = Open_Sans({ subsets: ["latin"], variable: "--font-opensans" });

export const metadata = {
  title: "NS^2",
  description: "Next.js Project with Dynamic Navbar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${opensans.variable}`}>
      <body className="font-opensans">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
