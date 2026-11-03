import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Luxury Home Remodeling in Miami",
  description:
    "Premium bathroom, kitchen, marble, tile, painting and reconstruction services.",
  keywords: [
    "remodeling",
    "kitchen remodeling in Miami",
    "bathroom remodeling in Miami",
    "marble installation in Miami",
    "tile installation in Miami",
    "painting services in Miami",
  ],
  openGraph: {
    title: "Luxury Home Remodeling in Miami",
    description:
      "Transforming homes into luxury spaces with premium craftsmanship.",
    url: "https://hlcivilconstruction.com",
    siteName: "Luxury Remodeling",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
