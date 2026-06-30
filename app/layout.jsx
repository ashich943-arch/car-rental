import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "LTS Car Rental — Rent a Luxury Car in Dubai",
  description:
    "Rent luxury, sports and exotic cars in Dubai. 281+ cars in fleet, full insurance included, free delivery across Dubai. Daily, weekly, monthly and long-term rentals.",
  metadataBase: new URL("https://lts-car-rental.com"),
  openGraph: {
    title: "LTS Car Rental — Rent a Luxury Car in Dubai",
    description: "Dubai's luxury and exotic car rental. Full insurance, free delivery, no deposit.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
