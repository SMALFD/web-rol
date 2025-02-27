import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import ThemeWrapper from "./components/Themewrapper/Themewrapper";
import "./styles/globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
      <ThemeWrapper>{children}</ThemeWrapper>
      <Analytics />
      </body>
    </html>
  );
}


export const metadata: Metadata = {
    title: "Rol ASCFI",
    description: "Esta es la página de la liga de rol de ASCFI",
  };