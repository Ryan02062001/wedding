// app/layout.tsx (or layout.js)

import type { Metadata } from "next";
import { Montserrat, Alex_Brush } from "next/font/google";
// 1) Import your cursive font:
import "./globals.css";
import HeaderDesign from "../components/header-design";
import { Toaster } from "@/components/ui/toaster";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

// 2) Instantiate the cursive font:
const alexBrush = Alex_Brush({
  // If multiple weights exist, pick one:
  weight: "400",
  // This gives it a custom CSS variable name:
  variable: "--font-alex-brush",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wedding Website",
  description: "Ryan & Nicol's wedding page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`bg-[#a3b899]
          ${montserrat.variable} 
          ${alexBrush.variable}  // 3) Activate cursive font variable
          antialiased
        `}
      >
        <HeaderDesign />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
