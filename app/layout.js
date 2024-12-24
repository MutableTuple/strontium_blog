import { Poppins, Josefin_Sans } from "next/font/google"; // Import both Poppins and Josefin Sans fonts
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

// Load the Poppins font
const poppins = Poppins({
  subsets: ["latin"], // Specify the character subsets
  weight: ["400", "700"], // Specify the font weights you need
  style: ["normal", "italic"], // Optional: Include italic styles if needed
  display: "swap", // Optional: Use font-display swap for better performance
});

// Load the Josefin Sans font
const josefinSans = Josefin_Sans({
  subsets: ["latin"], // Specify the character subsets
  weight: ["400", "700"], // Specify the font weights you need
  style: ["normal"], // Normal style
  display: "swap", // Optional: Use font-display swap for better performance
});

export const metadata = {
  title: "Strontium -- Blogs for GenZ", // Updated title
  description:
    "A modern blog for Gen Z, where you can explore the latest trends and insightful articles.", // Updated description
};
export const revalidate = 60;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${josefinSans.className} antialiased mt-20`}
      >
        <Navbar />
        <div className="">{children}</div>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-5L9EY26LJS" />
    </html>
  );
}
