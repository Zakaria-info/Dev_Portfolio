import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Zakaria Hossain MERN Stack Developer Portfolio",
  description: "Modern portfolio of Zakaria Hossain, a MERN Stack Developer specializing in scalable full-stack applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-dark-navy text-white selection:bg-accent-pink/30`}>
        <SmoothScroll>
          <Navbar />
          {children}
          <footer className="py-10 text-center text-gray-500 text-sm border-t border-white/5">
            <p>© {new Date().getFullYear()} Zakaria Hossain Portfolio. All rights reserved.</p>
          </footer>
        </SmoothScroll>
      </body>
    </html>
  );
}
