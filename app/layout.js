import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeWrapper from "./components/ThemeWrapper";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  title: "The Cozy Corner",
  description: "A cozy online bookstore with great recommendations",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeWrapper>{children}</ThemeWrapper>
      </body>
    </html>
  );
}
