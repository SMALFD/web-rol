import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ThemeWrapper from "./components/Themewrapper/Themewrapper";
import "./styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
      <ThemeWrapper>{children}</ThemeWrapper>
      </body>
    </html>
  );
}


export const metadata: Metadata = {
    title: "Rol ASCFI",
    description: "Esta es la página de la liga de rol de ASCFI",
  };