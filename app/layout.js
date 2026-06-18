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
  title: "Chintan Chikitsa | Deepalli Sharma – Frequency Healer",
  description:
    "Chintan Chikitsa by Deepalli Sharma – a holistic healing practice offering frequency healing, sound healing, and wellness services. Book a free call today.",
  keywords: [
    "frequency healer",
    "sound healing",
    "Deepalli Sharma",
    "Chintan Chikitsa",
    "holistic healing",
    "energy healing",
  ],
  authors: [{ name: "Deepalli Sharma" }],
  openGraph: {
    title: "Chintan Chikitsa | Deepalli Sharma – Frequency Healer",
    description:
      "Holistic healing through frequency and sound. Book a free discovery call with Deepalli Sharma.",
    url: "https://chintanchikitsa.com",
    siteName: "Chintan Chikitsa",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chintan Chikitsa | Deepalli Sharma – Frequency Healer",
    description:
      "Holistic healing through frequency and sound. Book a free discovery call with Deepalli Sharma.",
  },
  metadataBase: new URL("https://chintanchikitsa.com"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
