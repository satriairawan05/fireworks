import { Lato } from "next/font/google";
import "./globals.css";

const font = Lato({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Happy New Year",
  description: "Next JS Fireworks",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
