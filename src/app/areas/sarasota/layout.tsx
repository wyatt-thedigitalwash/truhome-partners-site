import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "We Buy Houses in Sarasota, FL | TruHome Partners",
  description:
    "Sell your Sarasota home fast for cash. No fees, no repairs, no hassle. TruHome Partners buys houses in any condition. Get your free cash offer and close in as little as 7 days.",
  openGraph: {
    title: "We Buy Houses in Sarasota, FL | TruHome Partners",
    description:
      "Get a fair cash offer on your Sarasota home in 24 hours. No fees, no repairs, no hassle. Close in as little as 7 days.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/og-image.svg",
        width: 1640,
        height: 740,
        alt: "TruHome Partners — We Buy Houses in Sarasota, FL",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "We Buy Houses in Sarasota, FL | TruHome Partners",
    description:
      "Get a fair cash offer on your Sarasota home in 24 hours. No fees, no repairs, no hassle. Close in as little as 7 days.",
    images: ["/images/og-image.svg"],
  },
};

export default function SarasotaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
