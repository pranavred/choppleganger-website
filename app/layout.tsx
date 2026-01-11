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
    "Upload a selfie and discover which celebrity you look like on their worst day. Choppleganger uses AI-powered face matching for instant, hilarious results. Also known as choppelganger, doppleganger, doppelganger app. Free 3-day trial.",
  keywords: [
    "choppleganger",
    "choppelganger",
    "doppleganger",
    "doppelganger",
    "chopleganger",
    "celebrity lookalike",
    "celebrity twin",
    "ugly celebrity twin",
    "AI face matching",
    "celebrity match app",
    "face matching app",
    "celebrity doppelganger finder",
    "who do I look like",
    "celebrity lookalike app",
    "TikTok celebrity challenge",
    "ChopplegangerChallenge",
    "funny face match",
    "celebrity comparison app",
    "iOS celebrity app",
  ],
  authors: [{ name: "Wave Tech LLC" }],
  creator: "Wave Tech LLC",
  publisher: "Wave Tech LLC",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Choppleganger - Find Your Ugly Celebrity Twin",
    description:
      "Upload a selfie and discover which celebrity you look like on their worst day. AI-powered face matching, instant results, endless laughs. Also searched as choppelganger, doppleganger.",
    type: "website",
    locale: "en_US",
    siteName: "Choppleganger",
  },
  twitter: {
    card: "summary_large_image",
    title: "Choppleganger - Find Your Ugly Celebrity Twin",
    description:
      "Upload a selfie and discover which celebrity you look like on their worst day. #ChopplegangerChallenge",
    creator: "@choppleganger",
  },
  alternates: {
    canonical: "https://choppleganger.com",
  },
  category: "Entertainment",
  classification: "Mobile App",
  other: {
    "apple-itunes-app": "app-id=XXXXXXXXX", // Replace with actual App Store ID when available
    "google-play-app": "app-id=com.wavetechhq.choppleganger",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://choppleganger.com" />
        <meta name="application-name" content="Choppleganger" />
        <meta name="apple-mobile-web-app-title" content="Choppleganger" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
