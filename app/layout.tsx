import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Choppleganger - Find Your Ugly Celebrity Twin | AI Face Matching App",
  description:
    "Upload a selfie and discover which celebrity you look like on their worst day. AI-powered face matching, instant results, endless laughs. Free trial.",
  openGraph: {
    title: "Choppleganger - Find Your Ugly Celebrity Twin",
    description:
      "Upload a selfie and discover which celebrity you look like on their worst day. AI-powered face matching, instant results, endless laughs.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Choppleganger - Find Your Ugly Celebrity Twin",
    description:
      "Upload a selfie and discover which celebrity you look like on their worst day.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
