import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./(layout)/header/header";

const iranYekan = localFont({
  src: [
    {
      path: "./fonts/iranYekan/fonts/woff/IRANYekanWebThin.woff",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/iranYekan/fonts/woff/IRANYekanWebLight.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/iranYekan/fonts/woff/IRANYekanWebRegular.woff",
      weight: "normal",
      style: "normal",
    },
    {
      path: "./fonts/iranYekan/fonts/woff/IRANYekanWebRegular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/iranYekan/fonts/woff/IRANYekanWebMedium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/iranYekan/fonts/woff/IRANYekanWebBold.woff",
      weight: "bold",
      style: "normal",
    },
    {
      path: "./fonts/iranYekan/fonts/woff/IRANYekanWebBold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/iranYekan/fonts/woff/IRANYekanWebExtraBold.woff",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/iranYekan/fonts/woff/IRANYekanWebBlack.woff",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/iranYekan/fonts/woff/IRANYekanWebExtraBlack.woff",
      weight: "950",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "فروشگاه اینترنتی دیجیکالا",
  description: "فروشگاه اینترنتی دیجیکالا",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body
        dir="rtl"
        className={`w-full ${iranYekan.className}`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
