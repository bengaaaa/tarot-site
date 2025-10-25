import { EB_Garamond } from "next/font/google";
import "./globals.css";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-garamond",
});

export const metadata = {
  title: "Frib",
  description: "Join Ben for tarot readings in NYC.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ebGaramond.variable} antialiased`}>{children}</body>
    </html>
  );
}
