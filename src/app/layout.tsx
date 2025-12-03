import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

export const metadata: Metadata = {
  metadataBase: new URL('https://ionthief.github.io'),

  title: {
    default: "Ibrahim Sayed | Computer Vision Engineer",
    template: "%s | IonThief"
  },

  description: "Computer Vision Engineer interested in 3D Perception, Spiking Neural Networks (SNNs), and Deep Learning",

  keywords: ["Computer Vision", "3D Perception", "Deep Learning", "SNN", "Neuromorphic", "SLAM", "Robotics"],

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ionthief.github.io/",
    title: "Ibrahim Sayed | Computer Vision Engineer",
    description: "Computer Vision Engineer",
    siteName: "Ibrahim Sayed Portfolio",
    images: [
      {
        url: "/images/banner.png",
        width: 800,
        height: 800,
        alt: "IonThief",
      },
    ],
  },

  twitter: {
    card: "summary",
    title: "Ibrahim Sayed | CV Engineer",
    description: "Computer Vision Engineer",
    images: ["/images/banner.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrains.variable} font-sans antialiased bg-background text-text`}>
        <main className="min-h-screen flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
