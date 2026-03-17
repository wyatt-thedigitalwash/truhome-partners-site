import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TruHome Partners | We Buy Houses in Tampa Bay",
  description:
    "Sell your Tampa Bay home fast for cash. No fees, no repairs, no hassle. TruHome Partners buys houses in any condition. Get your free cash offer today.",
  icons: {
    icon: "/favicon/favicon.png",
  },
  openGraph: {
    title: "TruHome Partners | We Buy Houses in Tampa Bay",
    description:
      "Get a fair cash offer on your Tampa Bay home in 24 hours. No fees, no repairs, no hassle. Close in as little as 7 days.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/og-image.svg",
        width: 1640,
        height: 740,
        alt: "TruHome Partners — We Buy Houses in Tampa Bay",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TruHome Partners | We Buy Houses in Tampa Bay",
    description:
      "Get a fair cash offer on your Tampa Bay home in 24 hours. No fees, no repairs, no hassle. Close in as little as 7 days.",
    images: ["/images/og-image.svg"],
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
        {/* Google Analytics — replace GA_MEASUREMENT_ID with your actual ID */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" /> */}
        {/* <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GA_MEASUREMENT_ID');
        `}} /> */}

        {/* Meta (Facebook) Pixel — replace PIXEL_ID with your actual ID */}
        {/* <script dangerouslySetInnerHTML={{ __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', 'PIXEL_ID');
          fbq('track', 'PageView');
        `}} /> */}
      </head>
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
