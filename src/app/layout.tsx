import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Sharon Moses Jangam | Software Engineer",
  description:
    "Senior Software Engineer with 6.5+ years of building systems, cloud-native services, and intelligent software products across Apple, Samsung, RadiSys.",
  keywords: [
    "Software Engineer",
    "Apple",
    "iOS",
    "Swift",
    "Cloud Native",
    "5G",
    "Microservices",
    "Sharon Moses Jangam",
  ],
  openGraph: {
    title: "Sharon Moses Jangam | Software Engineer",
    description:
      "Senior Software Engineer with 6.5+ years at Apple, Samsung, and RadiSys.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
