import type { Metadata } from "next";
import "./globals.css";
import { barlow, restartHard } from "@/fonts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Wild Electrical | Residential, Commercial, Industrial & Solar Electricians",
  description:
    "Wild Electrical — licensed electricians covering residential, commercial, industrial and solar work, new homes, renovations, and utility-scale solar farm maintenance.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${restartHard.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
