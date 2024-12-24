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
  title: "Strontium - Blogs for GenZ", // SEO-friendly title with a clear keyword
  description:
    "Explore Strontium, the ultimate Gen Z blog with the latest trends, insightful articles, and captivating stories that resonate with young readers. Stay updated on all things Gen Z.", // Clear and informative description
  openGraph: {
    title: "Strontium - Blogs for GenZ", // Open Graph title for better social media sharing
    description:
      "Stay informed with Strontium, your go-to blog for Gen Z trends, lifestyle, and insightful stories. Explore articles, tips, and more.", // Open Graph description
    url: "https://www.strontium.com", // The URL of the page
    site_name: "Strontium", // Site name for Open Graph
    images: [
      {
        url: "/images/og-image.jpg", // Placeholder for the Open Graph image
        width: 1200,
        height: 630,
        alt: "Strontium Blog - Latest Gen Z Trends",
      },
    ],
  },
  twitter: {
    cardType: "summary_large_image", // Twitter card type
    title: "Strontium - Blogs for GenZ", // Twitter title
    description:
      "Discover the latest trends and stories on Strontium, your ultimate Gen Z blog. Articles that inspire and inform. Stay in the know!", // Twitter description
    image:
      "https://jgdwcbmkjskfurutwoyc.supabase.co/storage/v1/object/public/strontium/icon.png?t=2024-12-24T06%3A47%3A07.834Z", // Placeholder for Twitter image
  },
};

export const revalidate = 60; // Set revalidation time for ISR (Incremental Static Regeneration)

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" /> {/* Allow indexing */}
        <meta name="theme-color" content="#1a202c" />{" "}
        {/* Set theme color for mobile */}
      </head>
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
